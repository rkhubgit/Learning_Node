

const express = require('express');
const { Signup, Login, GetBatchInfo, GetAllUser } = require('../Controllers/userController');
const authUser = require('../Middleware/authmiddleware');

const router = express.Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/batch', authUser, GetBatchInfo)

router.get('/allusers', authUser, GetAllUser)


module.exports = router;