const mongoose = require('mongoose')

const option = {
    dbName: 'NewtonSchool'
}

mongoose.connect('mongodb://localhost:27017', option).then(() => {
console.log(`connected to database successfully`);
})
.catch((err) => {
    console.log(`Error Occurred: ${err.message}`);
})