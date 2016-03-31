var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
               fs.readFile('helloworld.js', 'utf8', function(err, data) {  
                 res.writeHead(200, {'content-type' : 'text/plain'});
                 if (err)
                    res.write('Could not find or open file for reading\n');
                 else
                    res.write(data);
                 res.end()
               });
             });

server.listen(3000, function() {console.log('bound to port 3000');});

console.log('Server running on 3000');
