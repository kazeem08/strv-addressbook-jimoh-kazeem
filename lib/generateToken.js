const jwt = require('jsonwebtoken');
const config = require('../config/vars')

module.exports = {
  async generateToken(userId) {
    return jwt.sign({
      userId,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    }, config.jwtSecret);
  }
}
