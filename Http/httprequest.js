const http = require('http');

const options = {

    method: 'GET',
    host: 'localhost',
    port : '5000',
    path: '/'
    
}
http.request(options,  (res) => {
    console.log('request completd');
    // console.log(res);
    res.setEncoding('utf-8')
    res.on('data', (data) => {
        console.log(data+ ' ');
    }) 
})
.end();