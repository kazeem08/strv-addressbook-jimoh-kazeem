const jwt = require('jsonwebtoken');

module.exports = {
  async generateToken(userId) {
    console.log('IDD', userId)
    return jwt.sign({
      userId,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    }, 'kazeem');
  }
}
