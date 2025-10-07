const http = require('http');

const options = {

    method: 'GET',
    host: 'localhost',
    port : '4000',
    path: '/'
    
}
// http.request('Http\httpserver.js/profile?name=rohit&&role:developer', (res) => {
http.request(options,  (res) => {
    console.log('request completed');
    // console.log(res);
    // res.setEncoding('utf-8')
    res.on('data', (data) => {
        console.log(data+ ' ');
    }) 
})
.end();



