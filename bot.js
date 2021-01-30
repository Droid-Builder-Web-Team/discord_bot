const Discord = require('discord.js'); // Main discord API library
const Quotes = require('./quotes.js'); // Quotes command
const Roles = require('./roles.js'); // Roles command
const Weather = require('./weather.js'); // Weather command
const Never = require('./neverhaveiever.js'); // Never Have I Ever command
const Joke = require('./joke.js'); //Jokes Command
const Welcome = require('./welcome.js'); // Welcome Messages
const Conversation = require('./conversation.js'); // Artoo Conversations
const Maths = require('./math.js');
const Links = require('./links.js') // Links Command
const LocalToken = require('./localbot.json');
const giphyRandom = require("giphy-random");

//const client = new Discord.Client({
//			ws: { intents: 
//				[
//					"GUILD_MEMBERS", 
//					"GUILD_PRESENCES",
//					"GUILD_MESSAGES"
//				] 
//			}
//		});

const client = new Discord.Client();

const greet_channel_id = '714247035825422400'; // general-chat Channel
const admin_channel_id = '715193623129489429'; // Admin Channel

// List of allowed commands to listen for
const commands = [
	"!help",
	"!role",
	"!ping",
	"!quote",
	"!neverhaveiever",
	"!weather",
	"!joke",
	"!links",
	"!link-suggestion"
];

client.mood = 0.5;
client.moods = [
	'mad', // 0
	'sad',	// 0.25
	'good', // 0.5
	'happy', // 0.75
	'excited' // 1
];

client.on('ready', (response) => {
	console.log('I am ready! ' + client.user.tag);
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity('Ask me for !help');
//	client.channels.fetch(admin_channel_id)
//		.then(channel => channel.send('Beep Boop'))
//		.catch(console.error);

});

client.on('guildMemberAdd', member =>{
	console.log('Member joined....');
        client.channels.fetch(greet_channel_id)
                .then(channel => channel.send(Welcome.generateWelcome().replace('MEMBER_NAME', member.user)))
                .catch(console.error);

});

// Wait for messages
client.on('message', async message => {
	const parts = message.content.toLowerCase().split(' ');

  	if (commands.includes(parts[0])) { // Check that the command is allowed.
	  	console.log('Command heard!');

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

		if (parts[0] === '!links') {
			message.reply(Links.generateLinks(parts[1]));
		}

		if (parts[0] === '!link-suggestion') {
			if (!parts[1] || !parts[2] || !parts[3]) {
				message.reply('To suggest a link be added, please use `!link-suggestion URL | CATEGORY | DESCRIPTION`');
			} else {
				Links.makeSuggestion(message);
				message.reply('Thank you! I have captured this link and will humans review shortly!');
			}
		}

		if (parts[0] === '!help') {
			output = 'The following commands are available: \n';

			for (i = 0; i < commands.length;i++) {
		        output += "\t" + commands[i] + "\n";
		    }

			message.reply(output);
		}

		console.log('Command processed.');
	}

	if (
		message.content.toLowerCase().indexOf('artoo') === 0 
		|| message.content.toLowerCase().indexOf('artoo') === (message.content.length - 5)
	) { 
		// General conversational parsing
		const hasConversableResponse = Conversation.identify(message.content, client);
		if (hasConversableResponse) {
			message.channel.startTyping();	
			setTimeout(() => {
				message.reply(hasConversableResponse);
				message.channel.stopTyping();
			}, (hasConversableResponse.length * 10));
		}

		// General mathmatics parsing
		const hasMathSolution = Maths.formulate(message.content);
		if (hasMathSolution) {
			message.channel.startTyping();	
			setTimeout(() => {
				message.reply(hasMathSolution);
				message.channel.stopTyping();
			}, (hasMathSolution.length * 10));
		}	
		
		// For when asking for random gif OR has no clue what we are asking	
		if (
			!commands.includes(parts[0])
			&& !hasConversableResponse
			&& !hasMathSolution
		) {
			giphyRandom(
				'RiiuLenSRb1z6TD5hVHecQ0NYYeqYAoX',
				{ tag: 'droids' }
			).then((response) => {
				if (message.content.toLowerCase().indexOf('gif') !== -1 || message.content.toLowerCase().indexOf('giphy') !== -1) {
					message.reply('One random gif coming right up!');
				} else {
					message.reply('Uhhh.. I\'m not sure what you are asking for.. so here is a random gif instead');
				}
				message.channel.startTyping();
				setTimeout(() => {
					message.reply(response.data.images.original.url);
					message.channel.stopTyping();
				}, 2000);
			});
		}
	}
});

client.on("warn", function(info){
    console.log(`warn: ${info}`);
});


client.login(
	(process.argv.indexOf('--local') !== -1) 
		? LocalToken.token 
		: process.env.BOT_TOKEN
	);
