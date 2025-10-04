// const http = require('http');

// const options = {

//     method: 'GET',
//     host: 'localhost',
//     port : '5000',
//     path: '/'
    
// }
// http.request(options,  (res) => {
//     console.log('request completd');
//     // console.log(res);
//     res.setEncoding('utf-8')
//     res.on('data', (data) => {
//         console.log(data+ ' ');
//     }) 
// })
// .end();




const http = require('http')


const options = {
    method: 'GET', 
    port: '3000',
    host: 'localhost',
    path: '/profile'
}

http.request('Http\httpserver.js/profile?name=rohit&&role:developer', (res) => {

    

    res.on('data', (data) => {
        console.log('data', data+ '')
    })
})

.end()