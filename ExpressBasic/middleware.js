

const express = require('express');
const fs = require('fs')
const app = express();
const PORT = 4500;
app.use(express.json())


const userList = [
    {
        username: "Rohit Kumar",
        pass: "12345678"
    },
    {
        username: "Mohit Kumar",
        pass: "12345678"
    },
    {
        username: "Shivam Kumar",
        pass: "12345678"
    }

]


const CheckLogin = ((req, res, next) => {
    // console.log(req.body);
    console.log("inside the check login function")
      const {username, pass} = req.body
    const User = userList.find((user) => user.username === username)

    if(User){
        if(User.pass === pass){
            next();
        }else{
            res.send('password did not match')
        }
    }else{
        res.send('user not found')
    }
    next()

})

const FriendsList = ["Rohit", "Amit", "Shrish", "Shivam"]

const loggerFile = ((req, res, next) => {
   const {username} = req.body
   fs.appendFile('./user.txt', `\n ${username} has login successfully on to the portal`, (err) => {
    if(err) {
        console.log(`Error is occured: ${err.code} and error message is ${err.message}`);
        return;
    }
    next();
   })
  


})

// app.use(CheckLogin)
// app.use(loggerFile)


app.post('/friends', CheckLogin, loggerFile, (req, res) => {
    // console.log(req.body)
    res.send(FriendsList)
})

app.post('/message', CheckLogin, loggerFile, (req, res) => {
    console.log('inside the message callback function')
    const {username} = req.body;
    console.log(`${username}, how are you`)
    res.send('message fetch successfully')
})

app.get('/publicPage', (req, res) => {
    console.log('inside the public page callback function')
    res.send('public page fetch successfully')
})












app.listen(PORT, () => {

    console.log(`server is running on the PORT ${PORT}`)
})
