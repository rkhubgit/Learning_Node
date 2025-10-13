

const express = require('express')

const router = express.Router();

const productsList = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 15000},
    {id: 3, name: 'tablet', price: 25000},
    {id: 4, name: 'monitor', price: 35000},
]



// products routes
router.get('/product', (req, res) => {
    res.send(productsList);
})

router.post('/product', (req, res) => {
    productsList.push(req.body)
    res.send(productsList)
})


module.exports = router