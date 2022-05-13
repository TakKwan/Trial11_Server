const Router = require('express').Router()
const controllers = require('../controllers')

Router.get('/:userId', controllers.favorite.getUserFavoriteList)
Router.post('/', controllers.favorite.createFavoriteEntity)
Router.delete('/:userId/:parkCode', controllers.favorite.deleteFavoriteEntity)
Router.post('/check/', controllers.favorite.checkFavorite)

module.exports = Router