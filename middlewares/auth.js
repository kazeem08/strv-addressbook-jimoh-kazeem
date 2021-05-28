const jwt = require('jsonwebtoken');
const config = require('../config/vars');

//authentication to verify jwt token
function auth(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.errorResponse({
      code: 400,
      message: 'Access denied! No token provided',
    });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), config.jwtSecret);
    req.user = decoded;
    next();
  } catch (e) {
    return res.errorResponse({
      code: 400,
      message: 'Invalid token',
    });
  }
}

module.exports = auth;