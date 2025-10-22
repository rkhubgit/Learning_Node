

const mongoose = require('mongoose')


const option = {
    dbName: 'NS'
}

mongoose.connect(process.env.MONGODB_CONNECTION_URL, option)
.then(() => {
    console.log('database connected successfully')
})
.catch((err) => {
    console.log(`Error is occurred ${err.code} and error message is ${err.message}`)
})