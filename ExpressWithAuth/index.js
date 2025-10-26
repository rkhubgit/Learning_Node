
const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()
const userRouter = require('./src/Routes/userRoutes')
const productRouter = require('./src/Routes/productRoutes')
require('./src/DB/connectDatabase')



app.use(express.json())

app.use(cors())
app.use(express.static('./src/views'));

// set the template engine we are using
app.set('view engine', 'pug');

app.set('views', './src/views/')
app.use('/', userRouter)
app.use("/", productRouter)


app.listen(process.env.PORT, () => {
    console.log(`server is running on the PORT: ${process.env.PORT}`)
}) 