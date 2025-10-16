

const fs = require('fs');

// get the all created data from the json file
const get = () => {
    try{
        const data = fs.readFileSync('./data/Product.json')
        return JSON.parse(data)

        // write the short syntax for read and parsing the data
        // return JSON.parse(fs.readFileSync('./data/Products.json'))

    }catch(err){
        console.log(`Error is occurred: ${err.code} and error message is ${err.message}`)
    }
}

// Create the data
const Save = (product) => {
    // we are read the file for creating the data 
    // const data = fs.readFileSync('./data/Product.json');
    // const products = JSON.parse(data);

    // we are read the file for creating the data 
    const products = get(); 

    if(products){
        products.productList.push({id: products.productList.length +1, ...product})

        try{
            fs.writeFileSync('./data/Product.json', JSON.stringify(products, null, 3))
        }catch(err){
            console.log(`Error is occurred: ${err.code} and error message is ${err.code}`)
        }
        return true;
    }else{
        return false
    }
}

const Update = (id, productToBeUpdated) => {
    const products = get();
    console.log('productss', products)

    // if(products){
    //     products.productList.forEach((product, i) => {
    //         if(product.id == parseInt(id)){
    //             products.productList[i] = {...product, ...productToBeUpdated}
    //         }
    //     })
    //     fs.writeFileSync('./data/Product.json', JSON.stringify(products, "", 3))
    //     console.log(products)
    // }else{
    //     return false
    // }
}

const DeleteData = (id) => {
    const products = get();
    // console.log('productss', products)

    if(products){
        console.log('productsssss', products)
     const updated = products.productList.filter((item) => item.id !== parseInt(id))
     const data = {productList:  updated}
     try{
     fs.writeFileSync('./data/Product.json', JSON.stringify(data, "", 3))
    //  console.log(data)
     return true;
     }catch(err){
        console.log(`Error is occurred ${err.code} and error message ${err.message}`)
     }
    }else{
        return false;
    }
}


module.exports= {Save, get, Update,DeleteData}