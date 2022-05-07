const express = require('express')
const { success, error } = require('consola')
    // const expEjsLayouts = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')
const bodyParser = require('body-parser')
const db = require('./config/')

const app = express()
    // Variable globale
const title = 'Solange Pokea'
const project = 'Don Bosco Ngangi'

// Static files
app.use(express.static('public'))

// Engine Template
// app.use(expEjsLayouts)
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Express-session config
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: ''
}))

// connect-flash middleware config
app.use(flash())

// Global Variable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})


// Get the router
const router = require('./routes/index')
app.use('/', router)

// Error page
app.use(async(req, res, next) => {
    await res.render('error', { title })
    next()
})

const PORT = process.env.PORT || 7000

app.listen(PORT, (err) => {
    if (err)
        errror({ message: `Erreur: ${err}`, badge: true })
    success({ message: `Server run on port : ${PORT}`, badge: true })
})