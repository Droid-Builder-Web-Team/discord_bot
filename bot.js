const Discord = require('discord.js');
const client = new Discord.Client();

const TEST1 = '717407189190443009';
const TEST2 = '717407216860266626';
const TEST3 = '717407237454430238';

client.on('ready', () => {
	    console.log('I am ready!');
});

client.on('message', message => {
	console.log("Seen a message....");
	const parts = message.content.split(' ');

	if (parts[0] == '!role' && message.member != null) {
		switch(parts[1]) {
			case 'test1':
				message.member.addRole(TEST1);
				break;
			case 'test2':
				message.member.addRole(TEST2);
				break;
			case 'test3':
				message.member.addRole(TEST3);
				break;
			default:
				message.reply("Unknown role");
		}
	}
	
	if (message.content === 'ping') {
		message.reply('pong');
	}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
