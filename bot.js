const Discord = require('discord.js');
const Quotes = require('./quotes.js');
const client = new Discord.Client();

const RSERIES = '717758445956104212';
const TSERIES = '717758451916210187';
const BBSERIES = '717758449206820895';
const CSERIES = '717758459080343565';
const MSE = '717758456576081970';
const GONK = '717758461651320864';
const KSERIES = '717758453912830023';
const PROTOCOL = '717758463400345681';

var commands = [ "!help",
	"!role",
	"!ping",
	"!quote" ]

client.on('ready', () => {
	    console.log('I am ready!');
});

client.on('message', message => {
	const parts = message.content.split(' ');

	if (parts[0] == '!role' && message.member != null) {
		switch(parts[1]) {
			case 'r-series':
				message.member.addRole(RSERIES);
				break;
			case 't-series':
				message.member.addRole(TSERIES);
				break;
			case 'bb-series':
				message.member.addRole(BBSERIES);
				break;
			case 'c-series':
				message.member.addRole(CSERIES);
				break;
			case 'mse':
				message.member.addRole(MSE);
				break;
			case 'gonk':
				message.member.addRole(GONK);
				break;
			case 'k-series':
				message.member.addRole(KSERIES);
				break;
			case 'protocol':
				message.member.addRole(PROTOCOL);
				break;
			default:
				message.reply("Unknown role");
		}
	}

	if (message.content === '!quote') {
		message.reply(Quotes.generateQuote());
	}

	if (message.content === '!ping') {
		message.reply('pong');
	}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
