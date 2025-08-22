// File system module
const fs = require('fs');

//File read
fs.readFile('file.txt', 'UTF8', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
})

//File write
const content = 'Hello, World!';

fs.writeFile('output.txt', content, (err) => {
    if(err) {        
        console.log(err);     
           return;
   }
   console.log("fILE WRITTEN SUCCESSFULLY");
})

// HTTP module
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World')
})

server.listen(3000, () => {
    console.log('Server is running at port: 3000');
})

// PATH module
const path = require('path');

const directory = '/user/local';
const fileName = 'example.txt';

const fullPath = path.join(directory, fileName);
console.log(fullPath);

// OS module
const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

// Crypto module
const crpto = require('crypto');

const hash = crpto.createHash('sha256');
hash.update('Hello World');
console.log(hash.digest('hex'));

// Lodash module

// Reverse numbers using lodash

const lodash = require('lodash')

const numbers = [1, 2, 3, 4, 5];
const reverse = lodash.reverse(numbers);
console.log(reverse);


// Readable streams

const fs = require('fs');

const readableStream = fs.createReadStream('file.txt', 'utf8');
readableStream.on('data', (chunk) => {
    console.log(chunk);
});

readableStream.on("end", () => {
    console.log("Finished");
});

readableStream.on('error', (err) => {
    console.error('Error', err);
});

// Writable streams

const fs = require('fs');

const writeStream = fs.createWriteStream('file.txt');
writeStream.write("hello, ");
writeStream.write("world");
writeStream.end();

writeStream.on('finish', () => {
    console.log('finished');
});


