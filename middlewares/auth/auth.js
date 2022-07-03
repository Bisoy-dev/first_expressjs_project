const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

const authenticateUser = (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log(token)
    if(!token){
        return res.status(401).send('Token is required to authencticate user!');
    } 

    try{
        const decodedToken = jwt.verify(token, secretKey);
        req.user = decodedToken;
    }catch(err){
        return res.status(401).send(err);
    } 

    return next();
} 

module.exports = authenticateUser;