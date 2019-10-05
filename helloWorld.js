var http = require('http'); //create the server
var fs = require('fs'); //Include the File System Module to allow you to access files


http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) { //read the 'about.html' file
    if (err) throw err; //handle error
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);	//display the content of the 'about.html' file 
    return res.end();
  });
}).listen(3000);