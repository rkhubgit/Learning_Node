
const express = require('express');
require('dotenv').config()
const userRouter = require('./Routes/userRoutes')
require('./DB/connectDatabase')

const app = express();

app.use(express.json())


app.use('/', userRouter)


app.listen(process.env.PORT, () => {
    console.log(`server is running on the PORT: ${process.env.PORT}`)
}) 