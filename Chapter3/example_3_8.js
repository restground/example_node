var readline = require('readline');

var interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question('>>What is the meaning of life? ', function(answer){
	console.log('About the meaning of life, you said ' + answer);
	interface.setPrompt('>>');
	interface.prompt();
});

function closeInterface(){
	console.log('Leaving interface...');
	process.exit();
}

interface.on('line', function(cmd){
	if(cmd.trim() == '.leave') {
		console.log('Y/N');
		interface.setPrompt('>>');
		interface.prompt();
		interface.on('line', function(cmd){
			if(cmd.trim() == 'y' || cmd.trim() == 'Y') {
				closeInterface();	
			} else {
				console.log('But... You don\'t stop the end of interface');
				closeInterface();
			}	
		});
	} else {
		console.log("repeating command : " + cmd);
	}
	interface.setPrompt('>>');
	interface.prompt();
});

interface.on('close', function(){
	closeInterface();
});