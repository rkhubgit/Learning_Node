
const express = require('express');
const app = express();
require('dotenv').config()
const userRouter = require('./src/Routes/userRoutes')
require('./src/DB/connectDatabase')



app.use(express.json())


app.use('/', userRouter)


app.listen(process.env.PORT, () => {
    console.log(`server is running on the PORT: ${process.env.PORT}`)
}) 