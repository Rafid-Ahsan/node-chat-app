function getInbox(req, res, next) {
    res.render('inbox', {
        title: 'Inbox - Chat Applications'
    })
}

module.exports = {
    getInbox
}