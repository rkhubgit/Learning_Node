const fs = require('fs');

console.log('start');

setTimeout( () => {
    console.log('logging timer 1');
},1000);

// setTimeout( () =>{
//     console.log('logging timer 2');
// },1);

// let interval = setInterval( () => {
//     console.log("logging interval 1");
// },1000);


// setTimeout ( () => {
//     console.log("clearing interval");
//     clearInterval(interval);
// },5000);

setImmediate( () => {
    console.log('immidiate call');
})

fs.open('file.txt',() => {
    console.log('opening the file')

    setTimeout(() => {
        console.log('logging timer from openFile');
    },1000);
    setImmediate(() => {
        console.log("logging immediate from openFile")
    })
    Promise.resolve().then(() => console.log('pormise resolved'));
    process.nextTick(() => {
        console.log('process log');
    })
});