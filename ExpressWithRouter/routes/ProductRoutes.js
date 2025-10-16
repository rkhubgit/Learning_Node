

const express = require('express')

const router = express.Router();
 const {getAllProducts, getProduct, CreateProduct, UpdateProduct, DeleteProduct,EditProduct} = require('../Controllers/ProductController')

// const productsList = [
//     {id: 1, name: 'laptop', price: 45000},
//     {id: 2, name: 'mobile', price: 15000},
//     {id: 3, name: 'tablet', price: 25000},
//     {id: 4, name: 'monitor', price: 35000},
// ]



// // products routes
// router.get('/', (req, res) => {
//     res.send(productsList);
// })

// router.post('/', (req, res) => {
//     productsList.push(req.body)
//     res.send(productsList)
// })


router.route('/')
.get(getAllProducts)
.post(CreateProduct)

// router.get('/', getAllProducts)
// router.get('/:id', getProduct)
// router.post('/', CreateProduct)
// router.put('/:id', UpdateProduct);
// router.delete('/:id', DeleteProduct);

router.route('/:id')
.get(getProduct)
.put(UpdateProduct)
.delete(DeleteProduct)
.patch(EditProduct)


module.exports = router