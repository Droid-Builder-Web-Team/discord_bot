const Discord = require("discord.js"); // Main discord API library
const Quotes = require("./quotes.js"); // Quotes command
const Roles = require("./roles.js"); // Roles command
const Never = require("./neverhaveiever.js"); // Never Have I Ever command
const Joke = require("./joke.js"); //Jokes Command
const Welcome = require("./welcome.js"); // Welcome Messages
const Conversation = require("./conversation.js"); // Artoo Conversations
const Maths = require("./math.js");
const Links = require("./links.js"); // Links Command
const Battle = require('./battle.js');
const LocalToken = require("./localbot.json");
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

const greet_channel_id = "714247035825422400"; // general-chat Channel
const admin_channel_id = "715193623129489429"; // Admin Channel
const snarkAntiRepeat = [];

// List of allowed commands to listen for
const commands = [
  "!help",
  "!role",
  "!ping",
  "!quote",
  "!neverhaveiever",
  "!joke",
  "!links",
  "!categories",
  "!robme",
  "!link-suggestion",
  "!whereis",
  "!whereisartoo",
  "!canyoufind",
  "!battle"
];

client.mood = 0.5;
client.moods = [
  "mad", // 0
  "sad", // 0.25
  "good", // 0.5
  "happy", // 0.75
  "excited", // 1
];

const snarks = [
  "You're the reason God created the middle finger.",
  "Your secrets are always safe with me. I never even listen when you talk anyways.",
  "You bring everyone so much joy when you leave the room.",
  "I may love to shop but I will never buy your bull.",
  "I'd give you a nasty look but you've already got one.",
  "Someday you'll go far. I hope you stay there.",
  "Were you born this stupid or did you take lessons?",
  "The people who tolerate you on a daily basis are the real heroes.",
  "You should really come with a warning label.",
  "I don't know what your problem is, but I'm guessing it's hard to pronounce.",
  "If I wanted to hear from an a-hole, I'd fart.",
  "It's kind of hilarious watching you try to fit your entire vocabulary into one sentence.",
  "You look like something that came out of a slow cooker.",
  "I will ignore you so hard you will start doubting your existence.",
  "Feed your own ego. I'm busy.",
  "I'll never forget the first time we met. But I'll keep trying.",
  "You're a grey sprinkle on a rainbow cupcake.",
  "I thought of you today. It reminded me to take out the trash.",
  "You are so full of crap, the toilet's jealous.",
  "I love what you've done with your hair. How do you get it to come out of the nostrils like that?",
  "Stupidity isn't a crime, so you're free to go.",
  "I've been called worse by better.",
  "Don't you get tired of putting makeup on your two faces every morning?",
  "Too bad you can't Photoshop your ugly personality.",
  "Do your parents even realize they're living proof that two wrongs don't make a right?",
  "Jesus might love you, but everyone else definitely thinks you're an idiot.",
  "Please just tell me you don't plan to home-school your kids.",
  "You see that door? I want you on the other side of it.",
  "You're like the end pieces of a loaf of bread. Everyone touches you, but nobody wants you.",
  "If you're going to act like a turd, go lay on the yard.",
  "You are more disappointing than an unsalted pretzel.",
  "Your face makes onions cry.",
  "Don't worry about me. Worry about your eyebrows.",
  "Where'd you get your clothes, girl, American Apparently Not?",
  "If laughter is the best medicine, your face must be curing the world.",
  "You're not stupid! You just have bad luck when you're thinking.",
  "Isn't there a bullet somewhere you could be jumping in front of?",
  "I'd slap you but I don't want to make your face look any better.",
  "Have a nice day, somewhere else.",
  "Everyone's entitled to act stupid once in a while, but you really abuse the privilege.",
  "If ignorance is bliss, you must be the happiest person on the planet.",
  "Your family tree must be a cactus ‘cause you're all a bunch of pricks.",
  "If I threw a stick, you'd leave, right?",
  "Somewhere out there, there's a tree working very hard to produce oxygen so that you can breathe. I think you should go and apologize to it.",
  "You look like a ‘before' picture.",
  "Light travels faster than sound which is why you seemed bright until you spoke.",
  "Hold still. I'm trying to imagine you with personality.",
  "You are the human version of period cramps.",
  "Don't get bitter, just get better.",
  "What doesn't kill you, disappoints me.",
  "Aww, it's so cute when you try to talk about things you don't understand.",
  "Hey, your village called – they want their idiot back.",
  "Calling you an idiot would be an insult to all stupid people.",
  "I am returning your nose. I found it in my business.",
  "Good story, but in what chapter do you shut up?",
  "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
  "You're about as useful as an ashtray on a motorcycle.",
  "You need a kiss on the neck from a crocodile.",
  " May both sides of your pillow be uncomfortably warm.",
  " our kid is so annoying, he makes his Happy Meal cry.",
  "I'm not insulting you, I'm describing you.",
  "You are like a cloud. When you disappear it's a beautiful day.",
  "Child, I've forgotten more than you ever knew.",
  "I've seen people like you before, but I had to pay admission.",
  "I was hoping for a battle of wits but you appear to be unarmed.",
  "I've been called worse by better.",
  "Jealousy is a disease. Get well soon.",
  "Your arse must be pretty jealous of all the crap that comes out of your mouth.",
  "Don't hate me because I'm beautiful. Hate me because your boyfriend thinks so.",
  "I could eat a bowl of alphabet soup and poop out a smarter statement than whatever you just said.",
  "People like you are the reason I'm on medication.",
  "Earth is full. Go home.",
  "Who ate your bowl of sunshine this morning, thundercloud?",
  "You fear success, but you really have nothing to worry about.",
  "If you're going to be two-faced, at least make one of them pretty.",
  "Keep rolling your eyes, you might eventually find a brain.",
  "If your brain was dynamite, there wouldn't be enough to blow your hat off.",
  "Your only purpose in life is to become an organ donor.",
  "You are proof that evolution can go in reverse.",
  "Grab a straw, because you suck.",
  "Hey, you have something on your chin. No, the 3rd one down.",
  "Don't be ashamed of who you are. That's your parent's job.",
  "Remember when I asked for your opinion? Me neither.",
  "Were you born on the highway? That is where most accidents happen.",
  "You're about as useful as a screen door on a submarine.",
  "I believed in evolution until I met you.",
  "That sounds like a you problem.",
  "Unless your name is Google, stop acting like you know everything!",
  "I told my therapist about you.",
  "You're my favorite person... besides every other person I've ever met.",
  "I envy people who have never met you.",
  "You're impossible to underestimate.",
  "If you were an inanimate object, you'd be a participation trophy.",
  "Take my lowest priority and put yourself beneath it.",
  "You are a pizza burn on the roof of the world's mouth.",
  "People like you are the reason God doesn't talk to us anymore.",
  "I hope your wife brings a date to your funeral.",
  "If genius skips a generation, your children will be brilliant.",
  "I don't have the time or the crayons to explain this to you."
];

client.on("ready", (response) => {
  // console.log('I am ready! ' + client.user.tag);
  // console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity("Ask me for !help");
  client.channels
    .fetch(admin_channel_id)
    .then((channel) => channel.send("Beep Boop"))
    .catch(console.error);
});

client.on("guildMemberAdd", (member) => {
  // console.log('Member joined....');
  client.channels
    .fetch(greet_channel_id)
    .then((channel) =>
      channel.send(
        Welcome.generateWelcome().replace("MEMBER_NAME", member.user)
      )
    )
    .catch(console.error);
});

// Wait for messages
client.on("message", async (message) => {
  const parts = message.content.toLowerCase().split(" ");
  if (message.author.discriminator === '9093') {
    const snarkOdds = Math.floor(Math.random() * 3);
    const skikeOdds = Math.floor(Math.random() * 6);

    const snarkRandom = () => {
      const randomNumber = Math.floor(Math.random() * 99);
      if (snarkAntiRepeat.indexOf(randomNumber) !== -1) {
        return snarkRandom();
      }
      
      if (snarkAntiRepeat.length > 15) {
        snarkAntiRepeat.shift();
      }

      snarkAntiRepeat.push(randomNumber);

      return randomNumber;
    };


    if (snarkOdds === 0) {
      if (skikeOdds === 0) {
        message.reply('Error: Max limited reached. (Auto restarting bot now).');
        setTimeout(() => {
          message.reply('https://media3.giphy.com/media/txaitq8FsJSZpSuNKX/giphy.gif');
          setTimeout(() => {
            message.reply(snarks[snarkRandom()]); 
          }, 2500);
        }, 5000);
      } else {
        message.reply(snarks[snarkRandom()]); 
      } 
    }

    return false;
  }

  if (commands.includes(parts[0])) {
    // Check that the command is allowed.
    // console.log('Command heard!');

    if (parts[0] == "!role" && message.member != null) {
      //Need to check the message has a member, otherwise crash!
      Roles.grantRole(parts[1], message);
    }

    if (parts[0] === "!quote") {
      message.reply(Quotes.generateQuote());
    }

    if (parts[0] === "!ping") {
      message.reply("pong");
    }

    if (parts[0] === "!neverhaveiever") {
      message.reply(Never.generateChallenge());
    }

    if (parts[0] === "!joke") {
      message.reply(Joke.generateJoke());
    }

    if (parts[0] === "!links") {
      message.reply(Links.generateLinks(parts[1]));
    }

    if (parts[0] === '!robme') {
      message.reply(Conversation.robmeRandom());
    }

    if (parts[0] === '!whereis' || parts[0] === '!whereisartoo' || parts[0] === '!canyoufind') {
      message.reply(Conversation.whereIsArtoo());
    }  

    if (parts[0] === "!link-suggestion") {
      if (!parts[1] || !parts[2] || !parts[3]) {
        message.reply(
          "To suggest a link be added, please use `!link-suggestion URL | CATEGORY | DESCRIPTION`"
        );
      } else {
        Links.makeSuggestion(message);
        message.reply(
          "Thank you! I have captured this link and humans will review it shortly!"
        );
        // TODO - Send this suggestion to admin/ moderator chat
      }
    }

    if (parts[0] === '!battle') {
      if (parts.indexOf('scores') !== -1) {
        const scores = Battle.getScores();
        if (!scores.wins[message.author.username] && !scores.losses[message.author.username]) {
          message.reply('You have no found battle records. Please battle other users first.');
        } else {
          message.reply(`${message.author.username} ranks #${Object.keys(scores.wins).map((i) => (scores.wins[i] > scores.wins[message.author.username] ? scores.wins[i] : null)).filter(n => n).length + 1} on the battle leaderboards | ${scores.wins[message.author.username]} wins | ${scores.losses[message.author.username]} losses | Team ${(scores.teams.dark.indexOf(message.author.username) !== -1 ? 'Dark Side' : 'Light Side')}`);
        }
      } else if (parts.indexOf('switch') !== -1 || parts.indexOf('change') !== -1) {
        const scores = Battle.getScores();
        const isLight = scores.teams.light.indexOf(message.author.username) !== -1;

        if (isLight) {
          scores.teams.light[message.author.username] = null;
          scores.teams.dark.push(message.author.username);
        } else {
          scores.teams.dark[message.author.username] = null;
          scores.teams.light.push(message.author.username);
        }

        message.reply(`${message.author.username} has joined team "${(scores.teams.dark.indexOf(message.author.username) !== -1 ? 'Dark Side' : 'Light Side')}"`);
      } else { 
        const players = message.mentions.users.map(mention => mention.username);
        if (players.length < 1) { return message.reply('Two players are required to start battle.'); }
        const responses = Battle.fight(players[0], players[1]); 
        setTimeout(() => {
          message.reply(Object.keys(responses).map(i => responses[i]).join('\n-----------\n'));
        }, 1000);
      }
    }

    if (parts[0] === '!categories') {
      message.reply(Links.generateCategories(parts[1]));
    }    

    if (parts[0] === "!help") {
      output = "The following commands are available: \n";

      for (i = 0; i < commands.length; i++) {
        output += "\t" + commands[i] + "\n";
      }

      message.reply(output);
    }

    // console.log('Command processed.');
  }

  let conversationCallSignCheck = message.content
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\?/g, "")
    .replace(/!/g, "")
    .replace(/,/g, "");
  if (conversationCallSignCheck.indexOf("artoo") !== -1) {
    if (
      conversationCallSignCheck.indexOf("artoo") === 0 ||
      conversationCallSignCheck.indexOf("artoo") ===
        conversationCallSignCheck.length - 5
    ) {
      // General conversational parsing
      const hasConversableResponse = Conversation.identify(
        message.content,
        client
      );
      if (hasConversableResponse) {
        message.channel.startTyping();
        setTimeout(() => {
          message.reply(hasConversableResponse);
          message.channel.stopTyping();
        }, hasConversableResponse.length * 10);
      }

      // General mathmatics parsing
      const hasMathSolution = Maths.formulate(message.content);
      if (hasMathSolution) {
        message.channel.startTyping();
        setTimeout(() => {
          message.reply(hasMathSolution);
          message.channel.stopTyping();
        }, hasMathSolution.length * 10);
      }

      // For when asking for random gif OR has no clue what we are asking
      if (
        !commands.includes(parts[0]) &&
        !hasConversableResponse &&
        !hasMathSolution
      ) {
        giphyRandom("RiiuLenSRb1z6TD5hVHecQ0NYYeqYAoX", { tag: "droids" }).then(
          (response) => {
            if (
              message.content.toLowerCase().indexOf("gif") !== -1 ||
              message.content.toLowerCase().indexOf("giphy") !== -1
            ) {
              message.reply("One random gif coming right up!");
            } else {
              const unknownResponses = [
                `So, I\'ve probably not been programmed to understand what you\'ve just said...ask Rob?`,
                `What? Darn, where is a translator droid when you need one...`,
                `Uhhh.. I\'m not sure what you are asking for.. so here is a random gif instead ${response.data.images.original.url}`,
                "I would.. if I had any idea what you are saying...",
                "Huh? I'm so confused right now",
                "I have no idea what you are asking of me.",
                "Nope, wrong command.. Keep trying though!",
                "<Unknown Command>. I'm sure you will get it soon!",
                "You talking to me?",
                "No....? Wait, YES!?\n\r HELP I NEED AN ADULT!",
                "Least buy me a drink first...",
                "Typical hooman.. know not what they ask for...",
                "Confusion he is.. Understanding he is not..",
                "Uhhh.. Yes?! wait.. NO!.. ok I have no idea what you are asking to be honest..",
                "Sure.. Reciting the entire English Dictionary starting from *A*!\n\r Just kidding.. I have no idea what you are asking.",
              ];
              message.reply(
                unknownResponses[
                  Math.floor(Math.random() * unknownResponses.length)
                ]
              );
            }
          }
        );
      }
    }
  }  
});

client.on("warn", function (info) {
  console.log(`warn: ${info}`);
});

client.login(
  process.argv.indexOf("--local") !== -1
    ? LocalToken.token
    : process.env.BOT_TOKEN
);
