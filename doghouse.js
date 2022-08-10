let usersInDogHouse = [];
let adminId = '2488';

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

const snarkAntiRepeat = [];

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

const getStatus = (id) => {
  let isInDoghouse = false;
  Object.keys(usersInDogHouse).map((i) => {
    if (usersInDogHouse[i].user === id) {
      isInDoghouse = true;
    }

    return false;
  });

  return isInDoghouse;
};

const updateOdds = (id, odds, admin) => {
  if (admin !== adminId) { return false; }

  if (getStatus(id)) {
    Object.keys(usersInDogHouse).map((i) => {
      if (usersInDogHouse[i].user === id) {
        usersInDogHouse[i].odds = Number(odds);
      }

      return false;
    });
  }
};

const addUser = (id, admin) => {
  if (admin !== adminId) { return false; }

  if (!getStatus(id)) {
    usersInDogHouse.push({
      user: id,
      odds: 3 
    });
  }
};

const removeUser = (id, admin) => {
  if (admin !== adminId) { return false; }

  if (getStatus(id)) {
    usersInDogHouse = Object.keys(usersInDogHouse).map((i) => {
      if (usersInDogHouse[i].user === id) {
        return false;
      }

      return usersInDogHouse[i];
    }).filter(n => n);
  }
};

const disciplineUser = (id, message) => {
  if (getStatus(id)) {
    const snarkOdds = Math.floor(Math.random() * 3);
    const skikeOdds = Math.floor(Math.random() * 6);

    if (snarkOdds === 0) {
      if (skikeOdds === 0) {
        message.reply('Error: Max limit reached. (Auto restarting bot now).');
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
  }
};

module.exports = {
  addUser,
  removeUser,
  getStatus,
  updateOdds,
  disciplineUser
};