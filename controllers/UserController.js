const { User, Favorite, Watch } = require('../models')
const middleware = require('../middleware')

const register = async (req, res) => {
  const { email, password, username } = req.body
  let passwordDigest = await middleware.hashPassword(password)
  const user = await User.create({ email, passwordDigest, username })
  res.send(user)
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      include: [{ model: Favorite }, { model: Watch }]
    })
    if (user && (await middleware.comparePassword(user.passwordDigest, req.body.password))) {
      let payload = {
        id: user.id,
        email: user.email,
        watchlist: user.Watches.map(watch => watch.parkCode),
        favorites: user.Favorites.map(favorite => favorite.parkCode)
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  register,
  login,
  checkSession
}