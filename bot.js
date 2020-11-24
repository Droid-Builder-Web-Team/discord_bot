const Discord = require('discord.js'); // Main discord API library
const Quotes = require('./quotes.js'); // Quotes command
const Roles = require('./roles.js'); // Roles command
const Weather = require('./weather.js'); // Weather command
const Never = require('./neverhaveiever.js'); // Never Have I Ever command
const Joke = require('./joke.js'); //Jokes Command
const Welcome = require('./welcome.js'); // Welcome Messages

const client = new Discord.Client({
			ws: { intents: ["GUILD_MEMBERS"] }
		});

//const greet_channel = '714247035825422400'; // general-chat Channel
const greet_channel = '715193623129489429'; // Admin Channel

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
	client.channels.get(greet_channel).send('Beep Boop');


});

client.on('guildMemberAdd', member =>{
	console.log('Member joined....');
	//client.channels.cache.get(greet_channel).send(`Welcome ${member}, we have been expecting you...`);
	client.channels.cache.get(greet_channel).send(Welcome.generateWelcome());
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
