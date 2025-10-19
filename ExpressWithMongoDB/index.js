

const express = require("express")
const app = express();
const userRouter = require('./route/userRoutes')
const productRouter = require('./route/productRoutes')
require('./DB/connectDatabase')
app.use(express.json());


app.use("/", userRouter)
app.use('/product', productRouter)

const PORT = 5700;
app.listen(PORT, () => {
    console.log(`server is running on the PORT ${PORT}`)
})