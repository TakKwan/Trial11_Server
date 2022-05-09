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
    const { userId, parkCode } = req.body
    const result = await Watch.create({ userId, parkCode })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const deleteWatchEntity = (req, res) => {
  try {
    const watchEntityId = req.params.watchEntityId
    Watch.destroy({
      where: { id: watchEntityId }
    })
    res.send({ "message": `${watchEntityId} watch entity deleted` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUserWatchList,
  createWatchEntity,
  deleteWatchEntity
}