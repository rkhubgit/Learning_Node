const fs = require('fs');

// fs.mkdir('./FS/Users',{recursive: true}, (err) => {
//     if(err){
//         console.log(`error occured ${err.code} and error is ${err.message}`);
//         return;
//     }
//     // further porcess
//     console.log('dir created successfully')
// })

// try{
//     fs.mkdirSync('./FS/Users/');
//     console.log('dir created succesfully');
// }catch(err){
//     console.log(`error occured ${err.code} and error is ${err.message}`)
// }


// fs.readdir('./FS', (err, files) =>{
//     if(err){
//         console.log(`Error occured: ${err.code} and error is ${err.message}`);
//         return;
//     }
//     console.log(files);
// })

fs.writeFile('./FS/rohit.txt', 'hii this is rohit kumar', (err) => {
    if(err){
        console.log(`Error occured: ${err.code} and error is ${err.message}`);
        return;
    }
})