const http = require('http'); //create the server
const fs = require('fs'); //Include the File System Module to allow you to access files
const stringMethods = require('./modules/stringManip.js');

const str = '   This is a test   ';
fs.writeFile('content.txt', stringMethods.stringManip('   This is a test   ') , (err) => {
    if (err) throw err;
});

http.createServer(function (req, res) {
    res.write('The file has been saved');
    return res.end();
}).listen(3001, () => {//The listen() method is used to specify which port you want to listen for HTTP requests on. 
    console.log(`Server is listening on port 3001. Open http://localhost:3001`);
});