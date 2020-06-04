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

// Wait for messages
client.on('message', async message => {
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

		if (message.content === '/join' && message.guild) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
			} else {
				message.reply('You need to join a voice channel first!');
			}
		}

		if (parts[0] === '!help') {
			output = 'The following commands are available: \n';
			for (i = 0; i < commands.length;i++) {
        output += "\t" + commands[i] + "\n";
      }
			message.reply(output);
		}
	}
});


client.login(process.env.BOT_TOKEN);
