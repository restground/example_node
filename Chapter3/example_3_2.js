var net = require('net');

var server = net.createServer(function(conn) {
	console.log('connected');

	conn.on('data', function(data) {
		console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
		conn.write('Repeating : ' + data + '//Data is perfectly sent to server.');
	});

	conn.on('close', function(){
		console.log('client closed connection');
	});
}).listen(3030);

console.log('listening on port 3030');