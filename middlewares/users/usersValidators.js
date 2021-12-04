// external imports
const { check } = require('express-validator')
const User = require('../../model/People')

// add user
const addUserValidators = [
    check('name')
        .isLength({ min: 1 })
        .withMessage('Name is Required')
        .isAlpha('en-US', { ignore: '-' })
        .withMessage('Name must not contain anything other than alphabet')
        .trim(),
    
    check('email')
        .isEmail()
        .withMessage('Invalid Email Address')
        .trim()
        .custom(
            async (value) => {
                try {
                    const user = await User.findOne({ email: value })
                    if(user) {
                        throw createError('Email has been already in used')
                    }
                }   catch(error) {
                    throw createError(error.message)
                }
            }
        ),

    check('mobile')
        .isMobilePhone('bn-BD', {
            strictMode: true
        })
        .withMessage('Mobile number must be a valid Bangladeshi Number')
        .custom(
            async (value) => {
                try {
                    const user = await User.findOne({ mobile: value })
                    if(user) {
                        throw createError('Mobile has been already in used')
                    }
                }   catch(error) {
                    throw createError(error.message)
                }
            }
        ),

    check('password')
        .isStrongPassword()
        .withMessage(
            'Password must be at least 8 characters long & hould contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol'
        )
]

module.exports = {
    addUserValidators
}