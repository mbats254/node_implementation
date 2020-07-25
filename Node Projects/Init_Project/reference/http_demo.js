const http = require('http');

//create server object
http.createServer((req, res) => {
    //Write response
    res.write('Hello M');
    res.end()
}).listen(5000, () => console.log("Server running..."))