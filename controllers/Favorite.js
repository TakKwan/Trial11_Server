const { Favorite } = require('../models')

const getUserFavoriteList = async (req, res) => {
  try {
    const userId = req.params.userId
    const result = await Favorite.findAll({ where: { userId } })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const createFavoriteEntity = async (req, res) => {
  try {
    const { userId, parkCode } = req.body
    const result = await Favorite.create({ userId, parkCode })
    res.send(result)
  } catch (error) {
    throw error
  }
}


const deleteFavoriteEntity = (req, res) => {
  try {
    const favoriteEntityId = req.params.favoriteEntityId
    Favorite.destroy({
      where: { id: favoriteEntityId }
    })
    res.send({ "message": `Entity ${favoriteEntityId} deleted` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUserFavoriteList,
  createFavoriteEntity,
  deleteFavoriteEntity
}