const User = require("../Models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const Signup = (req, res) => {
    const {firstName, lastName, email, password, batch} = req.body

    const salt = bcrypt.genSaltSync(10);
    const securedPass = bcrypt.hashSync(password, salt)
    User.create({
        firstName,
        lastName,
        email,
        password : securedPass,
        batch
    })
    .then((user) => {
        console.log(user);
        res.status(201).send({message: "user created successfully"})
    })
    .catch((err) => {
        res.send({"error": err.message})
    })

}

const Login = async(req, res) => {
    const {email, password} = req.body;

    try{
        const userInDB = await User.findOne({email})
        // console.log(userInDB);

        const isPasswordMatch = bcrypt.compareSync(password, userInDB.password)

        if(isPasswordMatch){
            // generating the json web token
            const {email, mobile, _id} = userInDB

            // const token = jwt.sign({email: userInDB.email, mobile: userInDB.mobile}, secretKey);
            const token = jwt.sign({email, mobile, _id}, process.env.JWT_SECRET_KEY)
            // console.log("token", token)
            res.json({message: 'user login successfully', token})
        }else{
            res.send({ message: 'Sorry wrong password entered !!', Status: 0})
        }


    }catch(err){
        res.send(`{ message:  Error is occurred: ${err.code} and error message is ${err.message}}`)
    }
}

const GetBatchInfo = (req, res) => {
    const {authorization} = req.headers
    // console.log(authorization)

    if(authorization){
    const data = authorization.split(" ");
    const authToken = data[1];
    // console.log(authToken)
    if(authToken){
    const userInfo = jwt.verify(authToken, JWT_SECRET_KEY)
    User.findOne({email: userInfo.email}).select({batch: 1})
    .then((user) => {
        res.json({batchName: user.batch})
    })
    .catch((err) => {
        console.log(err)
    })
    }   else{
        res.status(401).send('invalid token')
    } 

    }else{
       res.status(401).send('unauthorized user')
    }





}


module.exports = {Signup, Login, GetBatchInfo}