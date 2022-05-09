const Router = require('express').Router()
const controllers = require('../controllers')

Router.get('/:userId', controllers.watchlist.getUserWatchList)
Router.post('/', controllers.watchlist.createWatchEntity)
Router.delete('/:watchEntityId', controllers.watchlist.deleteWatchEntity)

module.exports = Router