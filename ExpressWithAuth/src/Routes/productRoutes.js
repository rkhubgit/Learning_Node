

const express = require('express');
const { homePage, AboutPage } = require('../Controllers/userController');

const router = express.Router();


router.get('/home', homePage);
router.get('/about', AboutPage)

module.exports= router