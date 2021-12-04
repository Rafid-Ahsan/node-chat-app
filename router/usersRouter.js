// external imports
const express = require('express')

// internal imports
const { getUsers, addUser } = require('../controller/userController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require('../middlewares/users/avatarUpload')
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/usersValidators')

const router = express.Router()

router.get('/', decorateHtmlResponse('Users') ,getUsers) // login page
router.post(
    '/',
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
) //add user

module.exports = router