const { User, Favorite, Watch } = require('../models')
const middleware = require('../middleware')


const toUserPayload = (user) => {
  const userPayload = {
    id: user.id,
    email: user.email,
    watchlist: user.Watches.map(watch => watch.parkCode),
    favorites: user.Favorites.map(favorite => favorite.parkCode)
  }

  return userPayload;
}

const register = async (req, res) => {
  const { email, password, username } = req.body
  let passwordDigest = await middleware.hashPassword(password)
  const user = await User.create({ email, passwordDigest, username })
  res.send(toUserPayload(user))
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      include: [{ model: Favorite }, { model: Watch }]
    })

    if (!user) {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    }

    const isPasswordCorrect = await middleware.comparePassword(user.passwordDigest, req.body.password)

    if (!isPasswordCorrect) {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    }

    const token = middleware.createToken({
      id: user.id,
      email: user.email
    })

    const userPayload = toUserPayload(user)

    return res.send({ user: userPayload, token })
  } catch (error) {
    throw error
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  const user = await User.findOne({
    where: { id: payload.id },
    include: [{ model: Favorite }, { model: Watch }]
  })
  res.send(toUserPayload(user))
}

module.exports = {
  register,
  login,
  checkSession
}