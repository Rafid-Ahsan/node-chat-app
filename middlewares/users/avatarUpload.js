function avatarUpload(req, res, next) {
    const upload = uploader (
        'avatars', // sub folder name in public dir
        ['image/jpeg', 'image/jpg', 'image/png'], // file type
        1000000, // file size
        'Only jpeg, jpg or png format allowed'
    )

    // calls the middleware function
    upload.any()(req, res, (err) => {
        if(err) {
            res.status(500).json({
                errors: {
                    avatar: {
                        message: err.message
                    }
                }
            })
        }   else {
            next()
        }
    })
}

module.exports = avatarUpload