var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect('3030', 'localhost', function () {
	console.log('connected to server');
	client.write('Who needs a browser to communicate?');
});

process.stdin.resume();
process.stdin.on('data', function(data) {
	client.write(data);
});

client.on('data', function(data){
	console.log(data);
});

client.on('close', function() {
	console.log('Server connection is closed');
});