const jwtMiddleware = require('express-jwt');

const { JWT_SECRET } = require('dotenv').config().parsed;

function handleAuthErrors(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Unauthorized' });
  }

  next(err);
}

module.exports = {
  handleErrors: handleAuthErrors,
  required: jwtMiddleware({
    secret: JWT_SECRET,
    requestProperty: 'auth.user'
  })
};
