

const express = require('express');
const app = express();
const UserRouter = require('./route/userRoutes')
require('./DB/connectDatabase')




const PORT = 5800;
app.use(express.json());


app.use('/', UserRouter)

app.listen(PORT, () => {
    console.log(`server is running on the PORT ${PORT}`)
})