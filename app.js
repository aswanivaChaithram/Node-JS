const fs = require('fs');

fs.readFile('file.txt', 'UTF8', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
})

const content = 'Hello, World!';

fs.writeFile('output.txt', content, (err) => {
    if(err) {        
        console.log(err);     
           return;
   }
   console.log("fILE WRITTEN SUCCESSFULLY");
})

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World')
})

server.listen(3000, () => {
    console.log('Server is running at port: 3000');
})

const path = require('path');

const directory = '/user/local';
const fileName = 'example.txt';

const fullPath = path.join(directory, fileName);
console.log(fullPath);

const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());