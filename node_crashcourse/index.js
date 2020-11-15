const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public','index.html'), (err, content) => {
    //         if(err) return err;
    //         res.writeHead(200, { 'content-type': 'text/html'})
    //             res.end(content)
    //     });
    // }
    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: "Sid Ahmed", age: 22},
    //         {name: "Sid AhmedFourth", age: 25}
    // ];
    // res.writeHead(200, {"content-type": "application/json"})
    // res.end(JSON.stringify(users))
    // }

    // build file path
    let filePath = path.join(__dirname, 
       'public', 
        req.url === '/' ? 'index.html' : req.url);

    // extention of file
    let extname = path.extname(filePath);

    // initial content type
    let contentType = 'text/html';
    
    //check extname and set content-type
    switch(extname) {
        case '.js': contentType = 'text/javascript';
        break;
        case '.css': contentType = 'text/css';
        break;
        case '.json': contentType = 'application/json';
        break;
        case '.png': contentType = 'image/png';
        break;
        case '.jpg': contentType = 'image/jpg';
        break;
    }
    
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code === "ENOENT") {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'content-type': 'text/html'});
                    res.end(content, "utf8")
                });
            }
        } else {
            // some server error
            
        }
    });



});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on: ${PORT}`))




