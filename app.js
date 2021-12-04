// external imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')

// internal imports
const { notFoundHandler,errorHandler } = require('./middlewares/common/errorHandler')
const loginRouter = require('./router/loginRouter')
const usersRouter = require('./router/usersRouter')
const inboxRouter = require('./router/inboxRouter')

const app = express()
dotenv.config()

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connection Succesful'))
.catch((error) => console.log(error))

// request parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set view engine
app.set('view engine', 'ejs')

// set static
app.use(express.static(path.join(__dirname, 'public')))

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

// routing setup
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)

// error handling
app.use(notFoundHandler) // 404 Handler
app.use(errorHandler) // common error handler

app.listen(process.env.PORT, () => {
    console.log(`App listening to port ${process.env.PORT}`)
})