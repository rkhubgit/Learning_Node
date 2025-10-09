


const express = require('express');

const app = express();
const PORT = 5000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello everyone i am Rohit Kumar this is my first express app</h1>')
})

// app.get('/about', (req, res) => {
//     res.send(`<h1>About Page</h1>`)
// })

// app.get('/data', (req, res) => {
//     res.type('application/json')
//     res.send(JSON.stringify({name: 'Rohit Kumar', }))

// })

// Examples of the get method api with the send to the param and query param 

const productsList = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 15000},
    {id: 3, name: 'tablet', price: 25000},
    {id: 4, name: 'monitor', price: 35000},
]


// Crud operations start here 

// GET Method to get all the products
app.get('/products', (req, res) => {
    res.type('application/json'),
    res.send({productsList})
})

// app.get('/products/:id', (req, res) => {
//    const products= productsList.find((product) => product.id === parseInt(req.params.id))
//    if(products){

//        res.send(products);
//    }else{
//     res.send('no products found')
//    }

// })

// POST Method to create a new product

app.post('/products', (req, res) => {
    console.log(req.body)
    productsList.push(req.body)
    res.send(productsList)

    // res.send('product created successfully')

})

// PUT Method to update a product
// use to update the data 
// which  element to update ---> through params
// what to update ---> through body
// we replace the whole content, hence you have to pass everything which has to be updated
// if no element found put then will created an item
// app.put('/products/:id', (req, res) => {
//     productsList.forEach((product, index) => {
//         if(product.id === parseInt(req.params.id)){
//             productsList[index] = req.body
//             console.log('products list',productsList)
//         }
//     })
//     res.send(productsList)
// })

// patch is also used to update the value
// but we update whatever is needed
// if no element found then will throw error
app.patch('/products/:id', (req, res) => {
    productsList.forEach((product, index) => {
        if(product.id === parseInt(req.params.id)){
            productsList[index] = {...productsList, ...req.body}
        }
    })
    res.send(productsList)

})

// DELETE Method to delete a product
app.delete('/products/:id', (req, res) => {
  const DeleProductList =  productsList.filter((product) => product.id !== parseInt(req.params.id))
    res.send(DeleProductList)
})





app.listen(PORT, () =>  {
    console.log(`Server is running on PORT ${PORT}`)
})




