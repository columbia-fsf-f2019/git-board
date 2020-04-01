const jwt = require('jsonwebtoken');
const jwtMiddleware = require('express-jwt');

const { JWT_SECRET } = require('dotenv').config().parsed;
