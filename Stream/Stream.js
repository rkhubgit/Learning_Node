
// readable stream
// writable stream
// transform stream
// duplex stream 


const fs = require('fs');

// for(let i = 0; i<10000; i++){

//     fs.appendFile('file.txt', `\n Hello world this is a line number is ${i}`, (err) => {
//         if(err){
//             console.log(err);
//         }
    
//     })

// }

// fs.readFile('file.txt', (err, data) => {
//     if(err){
//         console.log(`Error is occured ${err.code} , and message is ${err.message}`);
//     }
//     console.log(data);
// })


const ReadableStream = fs.createReadStream('file.txt');
const WritableStream = fs.createWriteStream('file2.txt');

let i = 0;
ReadableStream.on('data', (chunk) => {
    console.log(`---- New Chunk ---- ${i++}`)
    console.log(chunk);
    WritableStream.write(chunk)
})