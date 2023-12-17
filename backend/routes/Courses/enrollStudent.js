const User = require("../../model/userData");
const Course = require("../../model/insertData");
const isAuthentication = require("../../authentication");

const enrollStudent = async (req, res) => {
    let errorCode = null;
    if(!isAuthentication){
        return res.json({success: false, message: "User Not Found", alert: "Sign in with a valid account"});
    }
    try {
        const { courseId, userEmail } = req.body;
        const course = await Course.findById(courseId);
        let user = await User.findOne({ email: userEmail });
        const dueDate = Date.now() + parseInt(course.duration) * 7 * 24 * 60 * 60 * 1000;
        user.courses.push({ courseName: course, mark: false, dueDate });
        // console.log(user);
        await user.save().then(user => {
            console.log("course added and user updated");
            res.status(201).json({ success: true, message: "Course Added successfuly", user })
        }).catch(err => {
            errorCode = 500;
            throw new Error("user saving failed");
        })

    }
    catch (err) {
        res.status(errorCode || 500).json({ success: false, message: "Internal Server Error", error: err.message })
    }
}

module.exports = enrollStudent