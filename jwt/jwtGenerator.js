const jwt = require('jsonwebtoken'); 

module.exports = generateToken = (secretKey, user) => {
    try {
        const token = jwt.sign({
            userName: user.userName,
            email: user.email
        }, secretKey, {
            expiresIn: '60s'
        })

        return token;
    } catch (error) {
        console.log(error)
    }
}