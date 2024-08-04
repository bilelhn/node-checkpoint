const http = require('http');
const fs = require('fs');
const port = 3003; 



// task 2
// const server = http.createServer(function(req, res) {
   
//     res.write('<h1>Hello Node!!!!</h1>\n');
//     res.end();
// });

// server.listen(port, function(error) {
//     if (error) {
//         console.log('Error connecting', error);
//     } else {
//         console.log('Server is listening on port', port);
//     }
// });



// task 3
// const server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     fs.readFile('welcome.txt', function(error, data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('Error: File not found');
//         } else {
//             res.write(data); 
//         }
//         res.end();
//     });
// });

// server.listen(port, function(error) {
//     if (error) {
//         console.log('Error connecting', error);
//     } else {
//         console.log('Server is listening on port', port);
//     }
// });