// options

// ES6 modules ---> 
// import
// import {} from 'somefile' -----> exported as named export
// import someName from 'somefile ----> exported as default export

// export 
// export const name = 'abhinav' ---> named export
// export default name

// CommonJS
// const {name, address , role}= require('./exportFile');

// console.log('name is ', name);
// console.log('address is ', address);
// console.log('role is ' , role);


// Learning start from here 

// there we have two types to import and export the files

// 1. ES6 modules
// import {someName} from 'somefile' -----> exported as names export
// import someName from 'somefile ----> exported as default export

// export 
// export const name = 'abhinav' ---> named export
// export default name

// 2. CommonJS
// const {name, address , role}= require('./exportFile');

const {name, address, Role}  = require('./exportFile')

console.log('name is ', name);
console.log('address is', address),
console.log('role is', Role)