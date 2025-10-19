const Product = require("../Models/ProductModel")


const CreateProduct = (req, res) => {

    Product.create(req.body)
    .then((product) => {
        console.log('product', product)
        res.send(product)
    })
    .catch((err) => {
        console.log(`Error is occurred: ${err.message}`)
        res.send('something went wrong')
    })
}


module.exports = {CreateProduct}