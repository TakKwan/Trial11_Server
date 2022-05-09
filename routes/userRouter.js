const Router = require('express').Router()
const controllers = require('../controllers')

Router.post('/register', controllers.user.register)
Router.post('/login', controllers.user.login)

module.exports = Router