

const express = require('express');
const { Signup, Login, GetBatchInfo } = require('../Controllers/userController');

const router = express.Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/batch', GetBatchInfo)


module.exports = router;