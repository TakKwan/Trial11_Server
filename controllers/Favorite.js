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
  const userId = req.params.userId
  const parkCode = req.params.parkCode
  Favorite.destroy({
    where: { userId, parkCode }
  })
  res.send({ "message": `${parkCode} watch entity deleted` })
}

const checkFavorite = async (req, res) => {
  try {
    const { userId, parkCode } = req.body
    const result = await Favorite.findOne({
      where: { userId, parkCode }
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUserFavoriteList,
  createFavoriteEntity,
  deleteFavoriteEntity,
  checkFavorite
}