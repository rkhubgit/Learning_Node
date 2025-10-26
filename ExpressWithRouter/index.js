const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 5050;

const productRouter = require('./routes/ProductRoutes');
const UserRouter = require('./routes/userRoutes');

// for parse the body 
app.use(express.json())
app.use(cors())


// const productsList = [
//     {id: 1, name: 'laptop', price: 45000},
//     {id: 2, name: 'mobile', price: 15000},
//     {id: 3, name: 'tablet', price: 25000},
//     {id: 4, name: 'monitor', price: 35000},
// ]
// app.route('/product')
//     .get((req, res) => {
//     res.send(productsList);
// })
//     .post((req, res) => {
//     productsList.push(req.body);
//     res.send(productsList)
// })

// get('/product', (req, res) => {
//     res.send(productsList);
// })

// app.post('/product', (req, res) => {
//     productsList.push(req.body);
//     res.send(productsList)
// })

// here we calling the productRoute which is import by the product route
// we can define the two things into it first it --(baseRoute), and then the api route
app.use('/product', productRouter);


app.use('', UserRouter);


// app.all('*', (req, res) => {
//     res.send('something went wrong')
// })


app.listen(PORT, () => {
    console.log(`server is running on the PORT ${PORT}`)
})

