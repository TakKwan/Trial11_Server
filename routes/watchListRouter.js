const Router = require('express').Router()
const controllers = require('../controllers')

Router.get('/:userId', controllers.watchlist.getUserWatchList)
Router.post('/', controllers.watchlist.createWatchEntity)
Router.delete('/:userId/:parkCode', controllers.watchlist.deleteWatchEntity)
Router.post('/check/', controllers.watchlist.checkWatched)

module.exports = Router