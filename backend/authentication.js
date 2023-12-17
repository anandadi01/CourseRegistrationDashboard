// const jwt=require('jsonwebtoken');
// const User=require('./model/userData');
// const isAuthentication = async (req, res, next) =>{
//    // console.log(req);
//     const {token}=req.cookies;
//     console.log(token);
//     if(!token){
//         return res.status(404).json({msg: "User Not Found"});
//     }
    
//     // const decodeToken=jwt.verify(token,process.env.SECRET_KEY);

//     const decodeToken=jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         if (err) {
//             if (err.name === 'TokenExpiredError') {
//                 return done(new TokenExpiredError('jwt expired', new Date(decoded.exp * 1000)));
//             } else {
//                 // Handle other errors
//                 return done(err);
//             }
//         }
    
//         // Token is valid
//         return done(null, decoded);
//     });
//     req.user=await User.findById(decodeToken.id);
//     next();
// };
// module.exports=isAuthentication;

const jwt = require('jsonwebtoken');
const User = require('./model/userData');

const isAuthentication = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({success:false});
    }
    return res.json({success:true});

    
};

module.exports = isAuthentication;
