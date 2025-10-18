const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');


const options = {
    dbName: 'NewtonSchool'
}

mongoose.connect('mongodb://localhost:27017', options)
.then(() => {
    console.log('database connected successfully')
})
.catch((err) => {
    console.error(`Error is occurred: ${err.code} and error message is ${err.message}`)
})