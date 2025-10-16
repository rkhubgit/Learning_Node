

const express = require('express')

const {Login, SignUp } = require('../Controllers/userController')
const router = express.Router()


router.post('/login', Login);
router.post('/signup', SignUp)


module.exports = router