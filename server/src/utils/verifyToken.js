const admin = require('firebase-admin')

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' })
  }

  try {
    const decodedToken = await admin
      .auth()
      .verifyIdToken(token.replace('Bearer ', ''))
    req.user = decodedToken
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' })
  }
}

module.exports = { verifyToken }
