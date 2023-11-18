const express = require('express')
const app = express.Router();

const User = require('../model/userData')
const { body, validationResult } = require('express-validator');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


app.post("/createuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Password must have 6 or more characters').isLength({ min: 6 }),
    body('name').isLength({ min: 4 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            const user = await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email
            })
            const token = jwt.sign({id:user._id},process.env.SECRET_KEY,{
                expiresIn:process.env.JWT_EXPIRE,
            });
            const options = {
                expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            //save in cookie
            res.status(200).cookie("token", token, options).json({
                success: true,
                user,
                token
            })
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

app.post("/loginuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Password must have 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "Credientials are Incorrect" })
        }
        const pwdComp = await bcrypt.compare(req.body.password, userData.password)
        if (!pwdComp) {
            return res.status(400).json({ errors: "Credientials are Incorrect" })
        }


        const token = jwt.sign({id:userData._id},process.env.SECRET_KEY,{
            expiresIn:process.env.JWT_EXPIRE,
        });
        const options = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        //save in cookie
        res.status(200).cookie("token", token, options).json({
            success: true,
            userData,
            token
        })
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

app.get('/logout', async (req, res) =>{
    res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now())
    })
    res.json({
        success:true,
        message:"Successfully logged Out"
    })
})

module.exports = app;