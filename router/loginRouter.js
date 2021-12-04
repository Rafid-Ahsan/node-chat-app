const express = require('express')

const { getLogin } = require('../controller/loginController')

const router = express.Router()

router.get('/', getLogin) // login page

module.exports = router