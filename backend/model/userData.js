const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    courses: [{
        courseName: {
            type: mongoose.Schema.ObjectId,
            ref: 'courses'
        },
        mark: {
            type: Boolean,
            default: false
        },
        dueDate: {
            type: Date,
            require:true
        }
    }]
});

module.exports = mongoose.model('user', UserSchema)