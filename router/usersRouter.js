// external imports
const express = require('express')

// internal imports
const { getUsers } = require('../controller/userController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require('../middlewares/users/avatarUpload')

const router = express.Router()

router.get('/', decorateHtmlResponse('Users') ,getUsers) // login page
router.post('/', avatarUpload)

module.exports = router