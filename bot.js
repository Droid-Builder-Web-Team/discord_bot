const Discord = require('discord.js');
const client = new Discord.Client();

const TEST1 = '717407189190443009';

client.on('ready', () => {
	    console.log('I am ready!');
});

client.on('message', message => {
	console.log("Seen a message....");
	const parts = message.content.split(' ');

	if (parts[0] == '!role' && message.member != null) {
		if (parts[1] == 'test1') {
			console.log("Someone asked for test1 role");
			message.member.addRole(TEST1);
			message.reply('Ok, thats done.');
		}
		if (parts[1] == 'test2') {
		        console.log("Someone asked for test2 role");
		        message.member.addRole(TEST2);
		        message.reply('Ok, thats done.');
		}

	}
	
	if (message.content === 'ping') {
		message.reply('pong');
	}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
