const Discord = require('discord.js');
const Quotes = require('./quotes.js');
const Roles = require('./roles.js');
const client = new Discord.Client();

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

  if (commands.includes(parts[0])) {

		if (parts[0] == '!role' && message.member != null) {
			Roles.grantRole(parts[1], message);
		}

		if (parts[0] === '!quote') {
			message.reply(Quotes.generateQuote());
		}

		if (parts[0] === '!ping') {
			message.reply('pong');
		}

		if (parts[0] === '!help') {
			message.reply('The following commands are available: ' + commands);
		}
	}
});


client.login(process.env.BOT_TOKEN);
