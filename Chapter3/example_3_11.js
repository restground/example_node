var execfile = require('child_process').execFile,
	child;

child = execfile('node', ['example_3_10.js'], function(error, stdout, stderr) {
	if(error == null){
		console.log('Running file stdout: \n' + stdout + '\n');
	}
});