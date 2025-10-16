

const User = require('../Models/userModel')


const Login = (req, res) => {
    res.send('user login successfully')
}


const SignUp = (req, res) => {
    // res.sen('user signup successfully')
      console.log(req.body);
    const {username, email, password, role, mobile}= req.body
    const newUser = new User({username, email, password, role, mobile})
    newUser.save()
    .then((user) => {
        console.log(user);
        res.send('signup successful and saved data !')
    })
    .catch((err) => {
        console.log(err);
        res.send('something went wrong !!')
    })
}


module.exports= {Login, SignUp}