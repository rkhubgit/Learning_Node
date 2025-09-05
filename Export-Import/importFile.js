// options

// ES6 modules ---> 
// import
// import {} from 'somefile' -----> exported as named export
// import someName from 'somefile ----> exported as default export

// export 
// export const name = 'abhinav' ---> named export
// export default name

// CommonJS
const {name, address , role}= require('./exportFile');

console.log('name is ', name);
console.log('address is ', address);
console.log('role is ' , role);