const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Course = mongoose.model('Course', courseSchema)

module.exports = Course