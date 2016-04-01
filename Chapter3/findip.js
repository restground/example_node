#!/usr/local/bin/node

var dns = require('dns');
var readline = require('readline');
var ip;

var interface = readline.createInterface(process.stdin, process.stdout, null);

var start =	interface.question('Please input the domain > ', function(answer){
		dns.lookup(answer, function(err, addr){
			if(err) {
				throw err;
			}
			ip = addr;
			console.log('ip address of '+answer +' : ' + ip);
			dns.reverse(ip, function(err, domains){
				domains.forEach(function(domain){
					console.log(domain);
					start();
				});
			});
		});
	});	


