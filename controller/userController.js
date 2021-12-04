function getUsers(req, res, next) {
    res.render('users', {
        title: 'Users - Chat Applications'
    })
}

module.exports = {
    getUsers
}