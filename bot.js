const Discord = require('discord.js'); // Main discord API library
const Quotes = require('./quotes.js'); // Quotes command
const Roles = require('./roles.js'); // Roles command
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
	"!joke",
	"!links",
	"!link-suggestion",
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
	// console.log('I am ready! ' + client.user.tag);
	// console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity('Ask me for !help');
	client.channels.fetch(admin_channel_id)
		.then(channel => channel.send('Beep Boop'))
		.catch(console.error);

});

client.on('guildMemberAdd', member =>{
	// console.log('Member joined....');
    client.channels.fetch(greet_channel_id)
        .then(channel => channel.send(Welcome.generateWelcome().replace('MEMBER_NAME', member.user)))
        .catch(console.error);

});

// Wait for messages
client.on('message', async message => {
	const parts = message.content.toLowerCase().split(' ');

  	if (commands.includes(parts[0])) { // Check that the command is allowed.
	  	// console.log('Command heard!');

		if (parts[0] == '!role' && message.member != null) { //Need to check the message has a member, otherwise crash!
			Roles.grantRole(parts[1], message);
		}

		if (parts[0] === '!quote') {
			message.reply(Quotes.generateQuote());
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
				message.reply('Thank you! I have captured this link and humans will review it shortly!');
				// TODO - Send this suggestion to admin/ moderator chat
			}
		}

		if (parts[0] === '!help') {
			output = 'The following commands are available: \n';

			for (i = 0; i < commands.length;i++) {
		        output += "\t" + commands[i] + "\n";
		    }

			message.reply(output);
		}

		// console.log('Command processed.');
	}

	let conversationCallSignCheck = message.content.toLowerCase().replace(/\./g, '').replace(/\?/g, '').replace(/!/g, '').replace(/,/g, '');
	if (conversationCallSignCheck.indexOf('artoo') !== -1) {
		if (
			conversationCallSignCheck.indexOf('artoo') === 0 
			|| conversationCallSignCheck.indexOf('artoo') === (conversationCallSignCheck.length - 5)
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
						const unknownResponses = [
							`So, I\'ve probably not been programmed to understand what you\'ve just said...ask Rob?`,
							`What? Darn, where is a translator droid when you need one...`,
							`Uhhh.. I\'m not sure what you are asking for.. so here is a random gif instead ${response.data.images.original.url}`,
							'I would.. if I had any idea what you are saying...',
							'Huh? I\'m so confused right now',
							'I have no idea what you are asking of me.',
							'Nope, wrong command.. Keep trying though!',
							'<Unknown Command>. I\'m sure you will get it soon!',
							'You talking to me?',
							'No....? Wait, YES!?\n\r HELP I NEED AN ADULT!',
							'Least buy me a drink first...',
							'Typical hooman.. know not what they ask for...',
							'Confusion he is.. Understanding he is not..',
							'Uhhh.. Yes?! wait.. NO!.. ok I have no idea what you are asking to be honest..',
							'Sure.. Reciting the entire English Dictionary starting from *A*!\n\r Just kidding.. I have no idea what you are asking.'
						];
						message.reply(unknownResponses[Math.floor(Math.random() * unknownResponses.length)]);
					}
				});
			}
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
