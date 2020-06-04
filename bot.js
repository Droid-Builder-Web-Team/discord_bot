const Discord = require('discord.js'); // Main discord API library
const Quotes = require('./quotes.js'); // Quotes command
const Roles = require('./roles.js'); // Roles command

const client = new Discord.Client();

// List of allowed commands to listen for
var commands = [
	"!help",
	"!role",
	"!ping",
	"!quote" ]

client.on('ready', () => {
	    console.log('I am ready!');
});

client.on('message', message => {
	const parts = message.content.split(' ');

  if (commands.includes(parts[0])) { // Check that the command is allowed.

		if (parts[0] == '!role' && message.member != null) { //Need to check the message has a member, otherwise crash!
			Roles.grantRole(parts[1], message);
		}

		if (parts[0] === '!quote') {
			message.reply(Quotes.generateQuote());
		}

		if (parts[0] === '!ping') {
			message.reply('pong');
		}

		if (parts[0] === '!help') {
			message.reply('The following commands are available: \n' + commands.split(','.join("\n")));
		}
	}
});


client.login(process.env.BOT_TOKEN);
