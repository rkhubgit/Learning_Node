


const express = require('express');

const app = express();
const PORT = 5000;

// app.get('/', (req, res) => {
//     res.send('<h1>Hello everyone i am Rohit Kumar this is my first express app</h1>')
// })

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

app.get('/products', (req, res) => {
    res.type('application/json'),
    res.send(JSON.stringify(productsList))
})

app.get('/products/:id', (req, res) => {
   const products= productsList.find((product) => product.id === parseInt(req.params.id))
   if(products){

       res.send(products);
   }else{
    res.send('no products found')
   }

})

app.listen(PORT, () =>  {
    console.log(`Server is running on PORT ${PORT}`)
})




