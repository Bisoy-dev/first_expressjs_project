const express = require('express')
const route = express.Router() 

const { login } = require('../controllers/userController')
const authorize = require('../middlewares/auth/auth') 
const bcrypt = require('bcryptjs')
const generateToken = require('../jwt/jwtGenerator')
const users = require('../data/sampleUserData')


route.get('/', authorize, (req, res) => {
    // const val = req.headers['user-agent'];
    // const getUser = httpContext.get('current_user');
    res.send('Halluuuu welcome!!');
});

route.post('/', login)

module.exports = route;