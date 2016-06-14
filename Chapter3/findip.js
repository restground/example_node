#!/usr/local/bin/node

var dns = require('dns');
var readline = require('readline');
var ip;

var interface = readline.createInterface(process.stdin, process.stdout, null);

function startInterface(){
	interface.question('Please input the domain > ', function(answer){
		if(answer == '.exit') {
			closeInterface();
			return;
		}
		dns.lookup(answer, function(err, addr){
			if(err) {
				throw err;
			}
			ip = addr;
			console.log('ip address of '+answer +' : ' + ip);
			startInterface();
		});
	});
}

function closeInterface(){
	console.log('Bye, Bye!');
	process.exit();
}

startInterface();


