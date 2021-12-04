const express = require('express')

const { getUsers } = require('../controller/userController')

const router = express.Router()

router.get('/', getUsers) // login page

module.exports = router