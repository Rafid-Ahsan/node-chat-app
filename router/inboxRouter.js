const express = require('express')
const { getInbox } = require('../controller/inboxController.js')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const router = express.Router()

router.get('/', decorateHtmlResponse('Inbox') ,getInbox) // login page

module.exports = router