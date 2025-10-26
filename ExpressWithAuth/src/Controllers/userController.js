const User = require("../Models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const Signup = (req, res) => {
    const {firstName, lastName, email, password, batch,Role} = req.body

    const salt = bcrypt.genSaltSync(10);
    const securedPass = bcrypt.hashSync(password, salt)
    User.create({
        firstName,
        lastName,
        email,
        password : securedPass,
        batch,
        Role
    })
    .then((user) => {
        console.log(user);
        res.status(201).send({message: "user created successfully"})
    })
    .catch((err) => {
        res.send({"error": err.message})
    })

}

const createToken = (userDetails) => {
    const token = jwt.sign(userDetails, process.env.JWT_SECRET_KEY, {expiresIn: '10h'})
    return token
}

const Login = async(req, res) => {
    const {email, password} = req.body;

    try{
        const userInDB = await User.findOne({email})
        // console.log(userInDB, 'user dbbbbbbbb');

        const isPasswordMatch = bcrypt.compareSync(password, userInDB.password)

        if(isPasswordMatch){
            // generating the json web token
            // const {email, mobile, _id} = userInDB

            // const token = jwt.sign({email: userInDB.email, mobile: userInDB.mobile}, secretKey);
            // const token = jwt.sign({email, mobile, _id}, process.env.JWT_SECRET_KEY)
           
            const token = createToken({userId: userInDB._id})
            // console.log("token", token)
            res.json({message: 'user login successfully', token})
        }else{
            res.send({ message: 'Sorry wrong password entered !!', Status: 0})
        }


    }catch(err){
        res.send(`{ message:  Error is occurred: ${err.code} and error message is ${err.message}}`)
    }
}

const GetBatchInfo = async(req, res) => {

  // console.log(req.headers);
//   console.log('user in getBatchInfo', req.user);
  res.json({batchName: req.user.batch})

}

const GetAllUser = async(req, res) => {
    const {Role} = req.user
    // console.log(Role, 'roleeeeeeeeeeeeee')
    if(Role){
        if(Role === "admin"){
          const allusers = await User.find();
          res.send(allusers)
        }else{
            res.json({status: 401, message: "You are the unauthorized user"})
        }

    }else{
        res.json({status: 500, message: "You don't have a valid role"})
    }
}

const LogoutUser = async (req, res) => {
    const {authorization} = req.headers
    const data = authorization.split(" ");
    const token = data[1];

    try{
        const userInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await User.findById(userInfo.userId)
        const filteredTokens = user.tokens.filter((to) => {
        return to !== token
    })

    await User.updateOne({_id: userInfo.userId}, {tokens: filteredTokens})
    res.send('logged out successfully');
        

    }catch(err){
        res.json({message: err.message})
    }
    
}

const homePage = (req, res) => {
    // res.send('<h1>Rohit Kumar</h1>')

    // res.sendFile('D:\\ROHIT KUMAR DATA\\BACKEND\\Node-Basic\\ExpressWithAuth\\src\\views\\home.html')

    // res.sendFile('/src/views/home.html', {root: process.env.BASE_PATH_URL})

    const productData = {
        mobile: "IPhone 14 Pro max",
        cloths: "Jeans",

    }

    res.render('home/homeWP.pug', productData)
}

const AboutPage = (req, res) => {
 res.sendFile("/src/views/about.html", {root: process.env.BASE_PATH_URL})
}


module.exports = {Signup, Login, GetBatchInfo, GetAllUser, homePage , AboutPage}