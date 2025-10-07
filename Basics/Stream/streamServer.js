
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    
    // res.write('<h1>home Page</h1>');
    if(req.url === '/'){
        res.write('<h1>Home Page</h1>')
        res.end();
    }else if(req.url === '/file'){
      fs.readFile('file.txt', 'utf-8',  (err, file) => {
        if(err){
            console.log(`Error is occured ${err.code} and error message is ${err.messae}`)
            return;
        }
        // console.log(file)
        // res.write(file)
        res.end(file)
      }) 
    } 
    else if(req.url === '/video'){
        res.writeHead(200, {'content-type': 'video/mp4'})
        const videoStream = fs.createReadStream('video2.mp4')
         videoStream.on('open', (err) => {
            if(err) 
            console.log(err);
            // duplex stream
            videoStream.pipe(res);
        })
    }  
    // res.end();
})

.listen(8000)