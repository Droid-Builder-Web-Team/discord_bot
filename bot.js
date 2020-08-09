const Discord = require('discord.js'); // Main discord API library
const Quotes = require('./quotes.js'); // Quotes command
const Roles = require('./roles.js'); // Roles command
const Weather = require('./weather.js'); // Weather command
const Never = require('./neverhaveiever.js'); // Never Have I Ever command
const Joke = require('./jokes.js'); //Jokes Command

const client = new Discord.Client();

// List of allowed commands to listen for
var commands = [
	"!help",
	"!role",
	"!ping",
	"!quote",
	"!neverhaveiever",
	"!weather",
	"!joke",
]

client.on('ready', () => {
	    console.log('I am ready!');
//			const cast = client.voice.createBroadcast();
//			cast.play('./assets/sounds/Cantina_orig.mp3');
//			for (const connection of client.voice.connections.values()) {
//			  connection.play(cast);
//			}
});
client.on('guildMemberAdd', member =>{
	const channel = member.guild.channels.find(channel => channel.name === "general-chat");
	if(!channel) return;

	channel.send(`Welcome ${member}, we have been expecting you...`)//TODO - Call from a selection of greetings
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

		if (parts[0] === '!weather') {
			message.reply(Weather.generateWeather());
		}

		if (parts[0] === '!ping') {
			message.reply('pong');
		}

		if (parts[0] === '!neverhaveiever') {
			message.reply(Never.generateChallenge());
		}

		if(parts[0] === '!joke') {
			message.reply(Joke.generateJoke());
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
