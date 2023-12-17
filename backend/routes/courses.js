const express = require('express')
const app = express.Router();
const isAuthentication = require('../authentication');
const cookieParser = require('cookie-parser');
const CoursesCollection = require("../model/insertData");

app.use(cookieParser());
// app.use(isAuthentication);

app.get('/courselist', async (req, res) => {
    const data = await CoursesCollection.find({}).select({ "name": 1, "_id": 1, "instructor": 1, "location": 1, "duration": 1, "thumbnail": 1, "description": 1, "enrollmentStatus": 1 });
    res.status(200).json({ data });
})
app.get('/coursedetail/:id', async (req, res) => {
    const id = req.params.id;
    const data = await CoursesCollection.findById(id);
    res.status(200).json({ data });
})

app.post('/enroll', require('./Courses/enrollStudent')) 


module.exports = app;