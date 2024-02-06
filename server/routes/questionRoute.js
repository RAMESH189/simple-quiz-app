const express = require('express')
const router = express.Router()

const {
    createQuestions, getQuaestions
} = require('../controllers/questionController')


router.post('/', createQuestions )
router.get('/', getQuaestions)


module.exports = router

