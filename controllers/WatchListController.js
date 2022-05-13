const { Watch } = require('../models')

const getUserWatchList = async (req, res) => {
  try {
    const userId = req.params.userId
    const result = await Watch.findAll({ where: { userId } })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const createWatchEntity = async (req, res) => {
  try {
    console.log(req.body)
    const { userId, parkCode } = req.body
    const result = await Watch.create({ userId, parkCode })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const deleteWatchEntity = (req, res) => {
  const userId = req.params.userId
  const parkCode = req.params.parkCode
  Watch.destroy({
    where: { userId, parkCode }
  })
  res.send({ "message": `${parkCode} watch entity deleted` })
}

const checkWatched = async (req, res) => {
  try {
    const { userId, parkCode } = req.body
    const result = await Watch.findOne({
      where: { userId, parkCode }
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUserWatchList,
  createWatchEntity,
  deleteWatchEntity,
  checkWatched
}