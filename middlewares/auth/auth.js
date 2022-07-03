const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

// authentication middleware.
const authenticateUser = (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log(token)
    if(!token){
        res.status(401);
        throw new Error('Token is required to authencticate user!');
    } 

    try{
        const decodedToken = jwt.verify(token, secretKey);
        req.user = decodedToken;
    }catch(err){
        res.status(401);
        throw new Error(err);
    } 

    return next();
} 

module.exports = authenticateUser;