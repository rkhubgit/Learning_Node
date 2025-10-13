

const express = require('express');

const router = express.Router();

const userList = [
    {
        name: 'Rohit Kumar',
        add: 'india',
        role: 'FullStack Developer'
    },
     {
        name: 'Mohit Kumar',
        add: 'india',
        role: 'Frontend Developer'
    },
     {
        name: 'Shivam Kumar',
        add: 'india',
        role: 'Backend Developer'
    },
     {
        name: 'Amit Kumar',
        add: 'india',
        role: 'cloud Developer'
    },

]

router.get('/user', (req, res) => {
    res.send(userList)
})

router.post('/user', (req, res) => {
    userList.push(req.body)
    res.send(userList)
})

module.exports = router