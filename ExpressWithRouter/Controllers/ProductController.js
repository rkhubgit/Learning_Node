
const {Save, get,Update, DeleteData} = require('../Models/ProductModel')


const getAllProducts = (req, res) => {
    console.log('get all products ')

    // for getting the data from to the json file   
    const product = get()

    res.send(product)
}

const getProduct = (req, res) => {
    res.send('get one product')
}

const CreateProduct = (req, res) => {
    console.log('created products')
    Save(req.body);

    // Read updated data after saving
    const product = get()
  // const data = fs.readFileSync('./data/Product.json');
  // const products = JSON.parse(data);
    if(product){
    //   res.status(201).json({
    //   message: 'Data created successfully',
    //   productList: products.productList
    // });
    res.status(201).send('Products create successfully')
    }else{
      res.status(500).send('internal sever error')
    }
}

const UpdateProduct = (req, res) => {

}

const DeleteProduct = (req, res) => {

  // const success = DeleteData(req.params.id)

  //   if(success){
  //     res.status(200).send('data deleted successfully')
  //   }else{
  //     res.status(500).send('internal server error')
  //   }

  DeleteData(req.params.id)
  res.send('product deleted successfully')
}

const EditProduct = (req, res) => {

  Update(req.params.id, req.body)
  res.send('Product updated successfully')

    // const success = DeleteData(req.params.id)

    // if(success){
    //   res.status(200).send('data deleted successfully')
    // }else{
    //   res.status(500).send('internal server error')
    // }
}




module.exports= {
    getAllProducts,
    getProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
    EditProduct
}