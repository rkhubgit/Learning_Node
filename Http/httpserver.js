const http = require('http');
// console.log(http);
const url = require('url');

const server = http.createServer((request, response) => {
    // console.log(request);
    // console.log(request.headers.host);
    // console.log(request.url);
    // console.log('server handler getting called');
    // response.write('hi this is my server ');
    console.log('string url ',request.url);
    const parsedUrl = url.parse(request.url);
    console.log('parsed url ', parsedUrl);

    const queryParams = new URLSearchParams(parsedUrl.query)
    console.log('queryParams', queryParams);
    if(request.url === '/'){
        // response.write('this is home page');
        response.write('<h1>home  page </h1>')
    }else if(request.url === '/profile'){
        // response.write('this is a profile page ');
        response.write('<h1>profile page </h1>')
    }else{
        // response.write("this is a default page");
        response.write('<h1>default page</h1>')
        

    }
    response.end();
  
 })
// Event Emitter is used internally
//  server.addListener('error', () => {
//     console.log('error occured')
//  })
// server.emit('error');

 const PORT = 4000
 server.listen(PORT, 'localhost', () => {
    console.log(`server is running at port : ${PORT}`);
 })








