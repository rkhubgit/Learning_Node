// const fs = require('fs');

// console.log('start');

// setTimeout( () => {
//     console.log('logging timer 1');
// },1000);

// // setTimeout( () =>{
// //     console.log('logging timer 2');
// // },1);

// // let interval = setInterval( () => {
// //     console.log("logging interval 1");
// // },1000);


// // setTimeout ( () => {
// //     console.log("clearing interval");
// //     clearInterval(interval);
// // },5000);

// setImmediate( () => {
//     console.log('immidiate call');
// })

// fs.open('file.txt',() => {
//     console.log('opening the file')

//     setTimeout(() => {
//         console.log('logging timer from openFile');
//     },1000);
//     setImmediate(() => {
//         console.log("logging immediate from openFile")
//     })
//     Promise.resolve().then(() => console.log('pormise resolved'));
//     process.nextTick(() => {
//         console.log('process log');
//     })
// });


// event queue always work this hierarchy
// if the process and promise are present into the code than first execute the process after that promise
// if the process and promise are not present into the code than first execute the below steps
// first...  timers and interval queue
// second... Async I/O queue, file I/O
// third...  setImmediate queue
// fourth... closing callbacks






// Learnings start from here

const fs = require('fs')

// console.log(fs);

setTimeout(() => {
 console.log('timer 1')
}, 1000);


setTimeout(() => {
    console.log('timer 2')
},0) // into the node when i give the 0 milliseconds libuv gives the 1 millisecond automatically

setImmediate(() => {
    console.log('immediate 1 ')
},1000)

fs.open('file.txt', () => {
    console.log('file opened')
})

process.nextTick(() => {
    console.log('process next tick called')
      setTimeout(() => {
        console.log('timer called inside the process')
    },1000)
})

Promise.resolve().then(() => { 
    console.log('promise resolved')

  
})
