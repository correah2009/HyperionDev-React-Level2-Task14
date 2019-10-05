const http = require('http'); //create the server
const fs = require('fs'); //Include the File System Module to allow you to access files
const even_nums = require('./modules/even_nums');
const prime_nums = require('./modules/primes');
const delete_file = require('./modules/delete_file');


const str = '   This is a test   ';
fs.writeFile('nums.txt', `Primes: ${prime_nums.primes().join(", ")}` , (err) => {
    if (err) throw err;
});

fs.appendFile('nums.txt', `\nEven numbers: ${even_nums.even_nums().join(", ")}`, (err) => {
    if (err) throw err;
  });

http.createServer(function (req, res) {
    console.log('The file nums.txt has been saved');
    fs.readFile('nums.txt', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error(`file doesn't exist`);
                return;
            }
        
            throw err;
        }
        res.write(data);
        //delete_file.delete_file(fs); //deletes the file nums.txt
        return res.end();
      });
}).listen(8000, () => {//The listen() method is used to specify which port you want to listen for HTTP requests on. 
    console.log(`Server is listening on port 8000. Open http://localhost:8000`);
});