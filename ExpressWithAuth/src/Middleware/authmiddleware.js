const User = require("../Models/userModel");
const jwt = require('jsonwebtoken')

const authUser = async(req, res, next) => {
    const {authorization} = req.headers
    // console.log(authorization)

    if(authorization){
    const data = authorization.split(" ");
    const authToken = data[1];
    // console.log(authToken)
    // if(authToken){
    // const userInfo = jwt.verify(authToken, process.env.JWT_SECRET_KEY)
    // console.log(userInfo, 'userinfoooo')
    // User.findOne({_id: userInfo.userId})
    // .then((user) => {
        
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
    // }   else{
    //     res.status(401).send('invalid token')
    // } 

    try{
        const userInfo = jwt.verify(authToken, process.env.JWT_SECRET_KEY)
        const user = await User.findById(userInfo.userId);

        const tokenIndex = user.tokens.findIndex((userToken) => userToken === authToken)

        if(tokenIndex === -1){
             res.send('you have been logged out. please login again!!')
        }else{
            
        req.user = user
        next()
        }


    }catch(err){
        res.json({status: 401, message: 'unauthorized token'})
    }

    }else{
       res.status(401).send('unauthorized user')
    }
}

module.exports = authUser;