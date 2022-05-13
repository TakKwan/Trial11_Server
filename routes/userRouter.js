const Router = require('express').Router()
const controllers = require('../controllers')
const middleware = require('../middleware')

Router.post('/register', controllers.user.register)
Router.post('/login', controllers.user.login)
Router.get('/session', middleware.stripToken, middleware.verifyToken, controllers.user.checkSession)

module.exports = Router