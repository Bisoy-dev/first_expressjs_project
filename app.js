require('dotenv').config();
const express = require('express');
const { errorHandler } = require('./middlewares/errorhandler/errorHandler');

// var httpContext = require('express-http-context')
const app = express(); 

// app.use(httpContext.middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use((req, res, next) => {
    
//     httpContext.ns.bindEmitter(req);
//     httpContext.ns.bindEmitter(res);
//     const { userName, password } = req.body;
//     if(userName && password){
//         const user = users.filter(u => u.userName === userName)[0];
//         hashPass = bcrypt.hashSync(user.password, 10);
//         if (user && (bcrypt.compareSync(password, hashPass))) {
//             httpContext.set('current_user', 'user_obj');
//         }
//     }
//     next();
// })
app.use('/user', require('./routes/userRoute'))
app.use(errorHandler)

// app.post('/login', async (req, res) => {
    
//     try {
//         const { userName, password } = req.body;

        
//         // const users = [{ userName: 'john', password: 'john123', email: 'john@gmail.com' }]

//         if (!(userName && password)) {
//             res.status(400).send('Username and password are required!')
//         }

//         const user = users.filter(u => u.userName === userName)[0];
//         encPass = await bcrypt.hash(user.password, 10)
        
//         if (user && (await bcrypt.compare(password, encPass))) {
//             const secretKey = process.env.SECRET_KEY;
//             const token = generateToken(secretKey, user);
//             // httpContext.set('current_user', user)
//             res.status(200).send({ user: user, token: token })
//         } else {
//             res.status(400).send('Username or password are invalid');
//         }
//         // res.send(encPass)

//     } catch (error) {
//         console.log(error)
//     }
//     // res.status(200).send('hellooo')
// })

module.exports = app;