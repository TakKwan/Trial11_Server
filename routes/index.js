const Router = require('express').Router()
const userRouter = require('./userRouter')
const watchListRouter = require('./watchListRouter')
const favoriteListRouter = require('./favoriteListRouter')

Router.use('/user', userRouter)
Router.use('/watchlist', watchListRouter)
Router.use('/favorite', favoriteListRouter)

module.exports = Router