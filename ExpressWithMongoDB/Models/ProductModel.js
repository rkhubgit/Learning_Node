

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    // creating the schema using the built-in validator
    name: {
        type: String,
        require: true,
        trim: true,
        // lowercase:true
        uppercase: true

    },
    price: {
        type: Number,
        required: true,
        cast: false
    },
    inStock: {
        type: Boolean,
        required: true
    }, 
    productType: {
        type: String,
        enum: ["mobile", "laptop"]
    }


    // for using custom validators
    // color: {
    //     type: Array,
        // validate: (value) => {
        //     console.log('received value',value);
        //     if(value.length > 2) {
        //         // value.forEach(color => {
        //         //     if(color == ""){
        //         //         console.log("color", color);
        //         //         return false
        //         //     }
        //         // });
        //         return true
        //     }
        //     return false
        // }
        // validate: {
        //     validator: (value) => {
        //         return value.length > 2
        //     },
        //     // message: 'color cant be less than 2',
        //     message: (err) => {
        //         console.log(err);
        //         return `${err.value} received is less than 2 `
        //     }
        // }

})



const Product = mongoose.model("product", ProductSchema)

module.exports = Product