const mongoose = require('mongoose')

const questionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model('Questions', questionsSchema)