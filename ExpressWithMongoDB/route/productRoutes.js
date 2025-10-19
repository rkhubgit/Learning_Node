

const express = require('express')
const { CreateProduct } = require('../Controllers/ProductControllers')

const router = express.Router()


router.post('/create', CreateProduct )

module.exports = router