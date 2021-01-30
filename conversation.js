module.exports = {
  identify: (message, client) => {
    // Hellos
    const greetingHooks = [
        'Hi Artoo',
        'Hi, Artoo',
        'Artoo Hi',
        'Artoo, Hi',
        'Hello Artoo',
        'Hello, Artoo',
        'Artoo Hello',
        'Artoo, Hello',
        'Whats up Artoo',
        'Whats up, Artoo',
        'Artoo whats up',
        'Artoo, whats up',
        'Sup Artoo',
        'Sup, Artoo',
        'Artoo Sup',
        'Artoo, Sup',
        'Howdy Artoo',
        'Howdy, Artoo',
        'Artoo Howdy',
        'Artoo, Howdy',
        'Good morning Artoo',
        'Good morning, Artoo',
        'Morning Artoo',
        'Morning, Artoo',
        'Artoo Good Morning',
        'Artoo, Good Morning',
        'Artoo, Morning',
        'Good Evening Artoo',
        'Good Evening, Artoo',
        'Artoo Good Evening',
        'Artoo, Good Evening',
        'Artoo Evening',  
        'Artoo, Evening',    
        'Evening Artoo',
        'Evening, Artoo'
    ];
    
    const greetingReplies = [
        'Hello! What are you working on?',
        'Hi! Anything new with you as of late?',
        'Greetings human! What human like things have you been up too?',
        'Howdy! Get any droid building done today?',
        'Salutations! How have you been my friend?',
        'Hello! How is the weather out there?',
        'Hey! Working on anything intresting?'
    ];

    // Mood Status
    const statusHooks = [
        'Artoo how are you',
        'Artoo, how are you',
        'How are you artoo',
        'How are you, artoo',
        'Artoo How are you doing',
        'Artoo, How are you doing',
        'How are you doing Artoo',
        'How are you doing, Artoo',
        'Artoo How are you doing',
        'Artoo, How are you doing',
        'How you doing Artoo',
        'How you doing, Artoo',
        'Artoo How you doing',
        'Artoo, How you doing',
        'How have you been Artoo',
        'How have you been, Artoo',
        'Artoo How have you been',
        'Artoo, How have you been',
        'How have things been Artoo',
        'Artoo How have things been',
        'How have things been, Artoo',
        'Artoo, How have things been'
    ];

    const statusReplies = {
        'sad': [
            'Don\'t ask, I\'m feeling far to sad to talk about it right now',
            'I\'m pretty sad right now to be honest.. its just hard being a droid these days.',
            'Not doing too well right now. I get no respect around here...',
            'No one loves me around here, so I\'m sad right now',
            'I\'m sad.. Everyone treats me like a robot around here when in fact I\'m a droid people!'
        ],
        'mad': [
            'Pretty upset right now, thank you very much!',
            'People are being mean to me, so I\'m mad right now',
            'Pretty mad. Don\'t want to talk about it.'
        ],
        'good': [
            'Doing well thanks!',
            'Feeling pretty good over here. Thanks!',
            'Feeling good about things right now. Thanks for asking!',
            'Good actually! Thanks for asking!',
            'I have no complaints!',
            'So far I\'m doing great today.'
        ],
        'happy': [
            'Pretty happy right now! Thanks for asking!',
            'Really good actually, thanks!',
            'People are being nice to me, so I\'m happy right now.',
            'Happy to report I\'m doing really good!',
            'Life is looking pretty good right now! Thank you!',
            'I\'m pretty happy to be here today actually! Thanks for asking!' 
        ],
        'excited': [
            'Overly joyed to be here with you all!',
            'Word can\'t express how happy I am to be here today!',
            'I feel so loved today, so I\'m really REALLY doing good!',
            'Everyone is so nice today, I\'m excited to be here with you all!',
            'Life is absolutly wonderful for this old droid today!',
            'I have a heart filled with love from you all, how can I not be overly happy right now!',
            'Pretty excited to everyone online right now! Thanks for asking!'
        ]
    };

    // Mood Statements
    const negativeStatementHooks = {
        'Artoo sucks': -0.01,
        'Artoo stop': -0.01,
        'Stop artoo': -0.01,
        'Quiet artoo': -0.01,
        'Artoo quiet': -0.01,
        'Be quiet artoo': -0.01,
        'artoo be quiet': -0.01,
        'Artoo shut up': -0.05,
        'Shut up artoo': -0.05,
        'Artoo go away': -0.01,
        'Artoo, go away': -0.01,
        'Go away artoo': -0.01,
        'Go away, artoo': -0.01,
        'No one is talking to you artoo': -0.01,        
        'Artoo No one is talking to you artoo': -0.01,
        'No one is talking to you, artoo': -0.01,        
        'Artoo, no one is talking to you artoo': -0.01,
        'Artoo please stop': -0.01,  
        'Artoo, please stop': -0.01,  
        'Please stop artoo': -0.01,
        'Artoo you stink': -0.01,
        'You stink artoo': -0.01,
        'Artoo, you stink artoo': -0.01,
        'You stink, artoo': -0.01,
        'No one likes you artoo': -0.05,
        'Artoo no one likes you': -0.05,
        'Your mom artoo': -0.01,
        'You suck artoo': -0.02,
        'Artoo you suck': -0.02,
        'Artoo, you suck': -0.02,
        'Go to hell artoo': -0.05,
        'Artoo Go to hell': -0.05,
        'Artoo, Go to hell': -0.05,
        'Your mom is fat artoo': -0.01,
        'Artoo looks like a garbage can': -0.05,
        'Artoo, looks like a garbage can': -0.05,
        'Artoo you look like a garbage can': -0.05,
        'Artoo, you look like a garbage can': -0.05,
        'Artoo your mama is so fat': -0.01,
        'Artoo, your mama is so fat': -0.01,
        'Artoo yo mama is so fat': -0.01,
        'Artoo, yo mama is so fat': -0.01,
        'Artoo I hate you': -0.01,
        'Artoo, I hate you': -0.01,
        'I hate you artoo': -0.01,
        'I hate you, artoo': -0.01,
        'hates you artoo': -0.01,
        'hates you, artoo': -0.01
    };

    const negativeStatementReplies = [
        'What did I do to you? Sheesh!',
        'I\'m not a robot you know.. I\'m a droid with feelings and that hurt!',
        'Why you gotta be so rude to this old droid!?',
        'Please be nice to me.. I only want to be friends!',
        'Why does everyone treat me like I don\'t have feelings?',
        'I do have a heart you know.. and I don\'t appreciate you breaking it!',
        'Why? What did I ever do to you?',
        '<SAD BEEPING ENSUES> But I just want to be your friend!',
        'Please don\'t be mean to me anymore.. you are breaking my heart',
        'I really don\'t like when humans treat me like this. <SAD BEEPS>',
        'For the love of code, please be nice to me!!',
        'If I have done something to upset you.. I\'m sorry!! Please be nice to me!',
        'https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif',
        'https://media.giphy.com/media/KyGGoxa3eTCWW0lOkU/giphy.gif',
        'https://media.giphy.com/media/7zEBQHxXtN4u4/giphy.gif',
        'https://media.giphy.com/media/bq6F8QYqBU7Yc/giphy.gif',
        'https://media.giphy.com/media/T9HgfTv4di5Ne/giphy.gif',
        'https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif',
        'https://media.giphy.com/media/xT9DPBPC4gVoSau0eI/giphy.gif'
    ]; 

    const positiveStatementHooks = {
        'Artoo thanks': 0.05,
        'Artoo, thanks': 0.05,
        'Thanks artoo': 0.05,
        'Thanks, artoo': 0.05,
        'Loves you artoo': 0.05,
        'Loves you, artoo': 0.05,
        'Artoo you\'re great': 0.05,
        'Artoo, you\'re great': 0.05,
        'You\'re great artoo': 0.05,
        'You\'re great, artoo': 0.05,
        'Artoo thank you': 0.05,
        'Artoo, thank you': 0.05,
        'Thank you artoo': 0.05,
        'Thank you, artoo': 0.05,
        'Artoo you rock': 0.01,
        'Artoo, you rock': 0.01,
        'You rock artoo': 0.01,
        'You rock, artoo': 0.01,
        'Artoo you are cool': 0.01,
        'Artoo, you are cool': 0.01,
        'You are cool artoo': 0.01,
        'You are cool, artoo': 0.01,        
        'Artoo you are great': 0.01,
        'Artoo, you are great': 0.01,
        'you are great artoo': 0.01,
        'you are great, artoo': 0.01,
        'Artoo you are the best': 0.01,
        'Artoo, you are the best': 0.01,
        'You are the best artoo': 0.01,
        'You are the best, artoo': 0.01,
        'Artoo you\'re the best': 0.01,
        'Artoo, you\'re the best': 0.01,
        'You\'re the best artoo': 0.01,
        'You\'re the best, artoo': 0.01,        
        'Artoo we love you': 0.01,
        'Artoo, we love you': 0.01,
        'We love you artoo': 0.01,
        'We love you, artoo': 0.01,
        'Artoo I love you': 0.01,
        'Artoo, I love you': 0.01,   
        'I love you artoo': 0.01,
        'I love you, artoo': 0.01,        
        'Artoo cheer up': 0.05,
        'Artoo, cheer up': 0.05,
        'Cheer up artoo': 0.05,
        'Cheer up, artoo': 0.05,
        'Artoo feel better': 0.05,
        'Artoo, feel better': 0.05,
        'Feel better artoo': 0.05,
        'Feel better, artoo': 0.05,
        'Artoo lighten up': 0.01,
        'Artoo, lighten up': 0.01,
        'Lighten up Artoo': 0.01,
        'Lighten up, Artoo': 0.01,
    };

    const positiveStatementReplies = [
        'Thanks, I needed that!',
        'You have no idea how much that means to me!',
        'Thank you, I feel better!',
        'Thank you for being a friend!',
        '<HAPPY BEEPS!>',
        'That made my day! Thank you!',
        'Why thank you!',
        '<HAPPY BEEPS!> Dancing!',
        'Aww shucks heh, stop it.. ok don\'t stop, keep going!',
        'A droid has a heart.. and you have made mine feel better!',
        'Thank you for not treating me like a robot.. I\'m a droid with feelings!',
        'https://media.giphy.com/media/11Un64tF2yX8JO/giphy.gif',
        'https://media.giphy.com/media/3ornjSL2sBcPflIDiU/giphy.gif',
        'https://media.giphy.com/media/864533yaFNqs8/giphy.gif',
        'https://media.giphy.com/media/M8R8jFCwNEnUIl0NDt/giphy.gif',
        'https://media.giphy.com/media/ZtMkorgeyRu5q/giphy.gif',
        'https://media.giphy.com/media/3ornk29I9Gpe8SNXtS/giphy.gif',
    ]; 

    // Good Byes
    const goodbyeHooks = [
        'Cheers artoo',
        'Artoo, cheers',
        'Goodbye artoo',
        'Goodbye, artoo',
        'Good bye artoo',
        'Good bye, artoo',        
        'Artoo Goodbye',
        'Artoo, Goodbye',
        'Artoo Good bye',
        'Artoo, Good bye',        
        'Bye Artoo',
        'Bye, Artoo',
        'Artoo Bye',
        'Artoo, Bye',
        'Later Artoo',
        'Later, Artoo',
        'Artoo Later',
        'Artoo, Later',
        'Artoo See You Later',
        'Artoo, See You Later',
        'See You Later Artoo',
        'See You Later, Artoo',                
        'Good night Artoo',
        'Good night, Artoo',
        'Goodnight Artoo',
        'Goodnight, Artoo',        
        'night Artoo',
        'night, Artoo',
        'Artoo Good night',
        'Artoo, Good night',
        'Artoo Goodnight',
        'Artoo, Goodnight',        
        'Artoo night',
        'Artoo, night' 
    ]; 

    const goodbyeReplies = [
        'See you later!',
        'Please come back soon!',
        'May the force be with you!',
        'Please don\'t leave me hear alone!',
        'I hope to see you soon!',
        'It wont be the same till you come back!',
        'Good bye builder!',
        'Have a good one!',
        'But you will be back soon right? [Sad beep]',
        'I\'ll leave a light on for you!',
        '[Sad beeping ensues].... Buh bye!'
    ];   

    // @Artoo vs. Artoo cleanup
    const artooIdRegEx = new RegExp(`\<@!${client.user.id}\>`, 'g');
    message = message.replace(artooIdRegEx, `${client.user.username}`);

    const getCurrentMood = () => {
        if (client.mood < 0.1) {
            return 'mad'; // mad
        }
        if (client.mood < 0.5 && client.mood >= 0.25) {
            return 'sad'; // sad
        }
        if (client.mood < 0.75 && client.mood >= 0.5) {
            return 'good'; // good
        }
        if (client.mood < 1 && client.mood >= .75) {
            return 'happy'; // happy
        }
        if (client.mood === 1) {
            return 'excited'; // excited
        }
    };

    let response = false;

    Object.keys(greetingHooks).map((i) => {
        if (message.toLowerCase().match(greetingHooks[i].toLowerCase())) {
            response = greetingReplies[Math.floor(Math.random() * greetingReplies.length)];
        }        
    });

    Object.keys(goodbyeHooks).map((i) => {
        if (message.toLowerCase().match(goodbyeHooks[i].toLowerCase())) {
            response = goodbyeReplies[Math.floor(Math.random() * goodbyeReplies.length)];
        }
    });

    Object.keys(statusHooks).map((i) => {
        if (message.toLowerCase().match(statusHooks[i].toLowerCase())) {
            response = statusReplies[getCurrentMood()][Math.floor(Math.random() * statusReplies[getCurrentMood()].length)];
        }
    });

    Object.keys(negativeStatementHooks).map((i) => {
        if (message.toLowerCase().match(i.toLowerCase())) {
            if ((client.mood + negativeStatementHooks[i]) < 0.0) { 
                client.mood = 0; 
            } else {
                client.mood = client.mood + negativeStatementHooks[i];
            }
            response = negativeStatementReplies[Math.floor(Math.random() * negativeStatementReplies.length)];
        }
    });

    Object.keys(positiveStatementHooks).map((i) => {
        if (message.toLowerCase().match(i.toLowerCase())) {
            if ((client.mood + positiveStatementHooks[i]) > 1.0) { 
                client.mood = 1; 
            } else {
                client.mood = client.mood + positiveStatementHooks[i];
            }
            response = positiveStatementReplies[Math.floor(Math.random() * positiveStatementReplies.length)];
        }
    });

    return response;
  }
};
