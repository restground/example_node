var util = require('util');
var dns = require('dns');
var test;
var t2;
var reqdns = dns.lookup('google.com', function(err, ip){
	if(err) {
		throw err;
	}
	console.log(ip);
	test=ip;
	process.nextTick(function() {
		console.log(test);	
	});
});
