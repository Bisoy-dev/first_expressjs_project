const authorize = require('../middlewares/auth/auth')
const bcrypt = require('bcryptjs')
const generateToken = require('../jwt/jwtGenerator')
const users = require('../data/sampleUserData') 
const asyncHandler = require('express-async-handler');

const login = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;

    if (!(userName && password)) {
        res.status(400)
        throw new Error('Username and password are required!')
    }

    const user = users.filter(u => u.userName === userName)[0];
    
    if(user){
        encPass = await bcrypt.hash(user.password, 10)
        if (user && (await bcrypt.compare(password, encPass))) {
            const secretKey = process.env.SECRET_KEY;
            const token = generateToken(secretKey, user);
            // httpContext.set('current_user', user)
            res.status(200).send({ user: user, token: token })
        } else {
            res.status(400);
            throw new Error('Username or password are invalid')
        }
    }else{
        throw new Error("Username not exist");
    }
})

module.exports = {
    login,
}