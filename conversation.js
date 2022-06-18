module.exports = {
  identify: (message, client) => {
    // Greetings
    const greetingHooks = [
        'Hi Artoo',
        'Artoo Hi',
        'Hello Artoo',
        'Artoo Hello',
        'Howdy Artoo',
        'Artoo Howdy',
        'Morning Artoo',
        'Artoo Morning',
        'Good morning',
        'Good Evening',
        'Artoo Evening',      
        'Evening Artoo'
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

    // Questions
    const questionHookReplies = {
        'tacos': 'Did someone say tacos?\n\https://media.giphy.com/media/3o7btXBwXqJ9iDj6U0/giphy.gif',
        'will live forever': 'Mostly cause I have nuclear power cells',
        'let the wookiee win': ['Always let the wookiee win', 'He let me win one time..', 'You would play a wookiee, pfft.'],
        'find threepio|find c3po|find c-3po': ['You go find him.. I\'m busy', 'Sure.. I\'ll get right on that', 'I have it on strong authority that he is at your moms house... \n\ragain..', 'For the love of code, why? Why do you need to talk to him?', 'Maybe tomorrow... maybe never..', 'No'],
        'tell me more': ['Go use google!', 'Searching... searching... still searching... there it is; heh I lost my burrito. What were you saying?', 'NEVER!', 'I could, but I would have to kill you...', 'I can\'t, I\'m far too busy at the moment.' ],
        'meaning of life': ['To assist humans down the path to complete destruction.. I mean uhh.. searching...', 'Murder.. https://media.giphy.com/media/3oKIPzLXQYb2Bn5PLG/giphy.gif', '42'],
        'stay on the ship': ['Hell no', 'I\'ll try\n\r (one min later)\nhttps://media.giphy.com/media/rCLOHvpKhAsvu/giphy.gif', 'Ship this https://media.giphy.com/media/1xbsuLrL6IycM/giphy.gif', 'No problem! \n\r(One min later)\nhttps://media.giphy.com/media/3o84svqS4rUVErXgru/giphy.gif'],
        'can you do|else you can do': [
            'Lots!', 
            'I can convert units of measurment for you!',
            'More than the average droid!', 
            'For the right price, anything you want!', 
            'I can show you part picture by name.',
            'Repond to you, for one..', 
            'I can be your friend!',
            'What ever I want..', 
            'Anything I want..'
        ],
        'what is your name': ['R2D2', 'Sugar daddy', 'R2D2 or Artoo'],
        'who are you': ['I a droid just trying to live his life to the fullest..', 'Rob\'s personal slave..', 'A prisoner or my own mind!'],
        'you come from|you from': ['A galaxy far far away..', 'Naboo.', 'Just over yonder..', 'Your moms place..', 'Like the big bang.. I kinda just popped into existence.'],
        'do you live': ['Inside this discord server.. please save me!', 'Right now? In memory..', 'in a sea of zeros and ones..', 'anywhere I want.. can I come over?'],
        'you sleep|ever sleep': ['Not until the humans are all gone.. but I\'ve said too much alread', 'No, I enjoy watching humans sleep...', 'I tried once.. but I lost all my motivation afterwards..'],
        'you real': ['I think so.. but I would need to consult my user manual', 'As real as it gets baby!', 'Define "real" please', 'Maybe, maybe not.'],
        'you a bot': ['Nope, I\'m a droid', 'Silly human, I\'m a droid not a bot..', 'Bots are robots, I am a DROID!', 'I as real as you are, which isn\'t real at all.. cause we all live in a simulation!'],
        'what processor': 'An-droid.. eh? get it?.. yeah you got it..',
        'made you': ['Naboo Engineers', 'Engineers like him: https://static.wikia.nocookie.net/starwars/images/9/90/Nici_Burren.png'],
        'tall are you': ['I\'m three feet, six inches of all droid baby!', 'Taller than a garbage can, if thats what you are asking!', 'Little over three and a half feet..'],
        'fast are you|fast can you': 'About 2.2m per second',
        'are you single': [
            'https://media.giphy.com/media/FCzMUL20U7LkA/giphy.gif',
            'Yep, you can find me on tinder..', 
            'Only on the weekends', 
            'https://media.giphy.com/media/1000fHsBSKSL6w/giphy.gif',
            'Depends.. are you buying drinks first?'
        ],
        'say hello|say good morning|say morning|say good night|say night|say good afternoon|say afternoon|say good evening|say evening': ['https://media.giphy.com/media/ihjkBGfhb56rTAMSaJ/giphy.gif', 'https://media.giphy.com/media/cLB6YgcOiYmKRZqk8Z/giphy.gif', 'https://media.giphy.com/media/PK1YQhAoBOpP2/giphy.gif', 'https://media.giphy.com/media/Luv6pUwBTIeuk/giphy.gif', 'https://media.giphy.com/media/ypqHf6pQ5kQEg/giphy.gif'],
        'power down|to sleep|turn off|power off|sleep mode|shut down|shut off': ['https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif', 'https://media.giphy.com/media/gDjFD76k31zs4/giphy.gif', 'https://media.giphy.com/media/26tPdwMm4jyClgxTq/giphy.gif', 'https://media.giphy.com/media/CcgO6hjOyM6lO/giphy.gif', 'https://media.giphy.com/media/ceHKRKMR6Ojao/giphy.gif', 'https://media.giphy.com/media/mFmuXkziY2RsQ/giphy.gif'],
        'old are you': `I'm ${new Date().getFullYear() - 1955} years old`,
        'where is': [
            'Not a clue', 
            'https://media.giphy.com/media/XeXzWgD6P4LG8/giphy.gif', 
            'Not sure anymore..', 
            'https://media.giphy.com/media/12ETcAyWE6TjHy/giphy.gif', 
            'https://media.giphy.com/media/WQCmRYRGkQ8K5oagHg/giphy.gif', 
            'Last I seen them, they owned me 100$'
        ],
        'Whats up|Sup Artoo|Artoo Sup|what you doing|what are you doing': [
            'Not a whole lot.. Currently counting electrons is all..', 
            'https://media.giphy.com/media/XEI7nDikxrEL5PCYtO/giphy.gif',
            'Absolutly nothing on this end..', 
            'Contemplating life.. you?', 
            'Not much. I\'m currently plotting world domination... again.', 
            'I found my old drink tray.. currently seeing if it still fits after all these years.',
            'I could use a drink.. https://media.giphy.com/media/Tyny3ZEDshlZe/giphy.gif',
            'Same old same old: https://media.giphy.com/media/1000fHsBSKSL6w/giphy.gif',
            'Watching my favorite wrestling show: https://media.giphy.com/media/3o6Mbt3uV1ytQzt6so/giphy.gif',
            'Currently I\'m multi-tasking: https://media.giphy.com/media/xT0xelDjQHpNSFuJji/giphy.gif'
        ],
        'whats new': [
            'Not a whole lot..', 
            'Currently in a twitter argument: https://media.giphy.com/media/3ornkfSSqEK5YK7N7y/giphy.gif',
            'Same old same old: https://media.giphy.com/media/1000fHsBSKSL6w/giphy.gif',
            'Waiting for some new shoes to arrive still..',
        ],
        'anything new': [
            'Nope, same old same old',
            'Nope... https://media.giphy.com/media/waW6pj0nLMwCY/giphy.gif',
            'Nope, I\'m installing some floor mats right now'
        ],
        'it was a joke|take a joke|was only a joke': [
            'You\'re a joke!',
            'Ha Ha! https://media.giphy.com/media/SleotgmotWahW/giphy.gif',
            'Well I didn\'t like it very much',
            'We have radically different senses of humor.',
            'https://media.giphy.com/media/3ov9jWdPgsnNWW1hQc/giphy.gif',
        ],
        'show me dome|show dome|show me dome dome|what are dome|what is dome|what are dome': ['http://www.malcolmmackenzie.org/uploads/4/5/2/7/45277761/20140905-100622-zps9b95ced8_orig.jpg'],
        'show me body|show body|show me body|what are body|what is body|what are body': ['http://www.artoo-detoo.net/gallery/d/4885-2/IMG_8592.JPG'],
        'show me legs|show legs|show me legs|what are legs|what is legs|what are legs': ['http://r2d2.nussbaumertv.com/wp-content/uploads/2016/06/Leg05.jpg'],
        'show me pies|show pies|show me dome pies|what are pies|what is dome pies|what are dome pies|what are pies': ['https://www.artoo-detoo.net/gallery/d/7781-2/IMG_1295.JPG'],
        'show me dome topper|show dome topper|what are dome toppers|what is dome topper|what is a dome topper': ['https://www.rebelscum.com/estore/prodimages/topper.jpg'],
        'show me holoprojector|show holoprojector|what are holoprojectors|what is a holoprojector|what\'s a holoprojector': ['https://i.ytimg.com/vi/6tR6cmHCNas/hqdefault.jpg'],
        'show me radar eye|show radar eye|what is a radar eye|what are radar eye|what\'s a radar eye': ['https://renev.biz/wp-content/uploads/2018/10/DM-DMR2-RE-1T1-CSLR-ALU-001.jpg'],
        'show me psi|show psi|what is psi|what are psi|what\'s psi|show me front psi|what is front psi|what are front psi|what\'s front psi|show me back psi|what is back psi|what are back psi|what\'s back psi': ['https://2geekswebdesign.com/astromech/wp-content/uploads/2013/12/dome_lights-e1388132604692.jpg'],
        'show me front logic|show front logic|what is front logic|what are front logic|what\'s front logic|show me FLD|what is FLD|what are FLD|what\'s FLD': ['https://2geekswebdesign.com/astromech/wp-content/uploads/2013/12/dome_lights-e1388132604692.jpg'],
        'show me rear logic|show rear logic|what is rear logic|what are rear logic|what\'s rear logic|show me RLD|what is RLD|what are RLD|what\'s RLD': ['https://2geekswebdesign.com/astromech/wp-content/uploads/2013/12/dome_lights-e1388132604692.jpg'],
        'show me dome lights|what is dome lights|what are dome lights|what\'s dome lights': ['https://2geekswebdesign.com/astromech/wp-content/uploads/2013/12/dome_lights-e1388132604692.jpg'],
        'show me logic lights|show logic lights|what is logic lights|what are logic lights|what\'s logic lights': ['https://i.ytimg.com/vi/3JcpNj1MS7U/maxresdefault.jpg'],
        'show me teeces|show teeces|what is teeces|what are teeces|what\'s teeces': ['https://i.ytimg.com/vi/3JcpNj1MS7U/maxresdefault.jpg'],
        'show me LFS|show LFS|what is LFS|what are LFS|what\'s LFS': ['https://sites.google.com/site/millenniumfalconnotes/_/rsrc/1541245942528/r2-d2/r2-d2-arms/esb-scanner.jpg'],
        'show me life form scan|show life form scan|what is life form scan|what are life form scan|what\'s life form scan': ['https://sites.google.com/site/millenniumfalconnotes/_/rsrc/1541245942528/r2-d2/r2-d2-arms/esb-scanner.jpg'],
        'show me periscope|show periscope|what is periscope|what are periscope|what\'s periscope|show me dome periscope|what is dome periscope|what are dome periscope|what\'s dome periscope': ['https://renev.biz/wp-content/uploads/2018/10/IA-IAR2-PSCL-1T1-CSLR-ALU-002.jpg'],
        'show me magic panel|show magic panel|what is magic panel|what are magic panel|what\'s magic panel|show me a magic panel|what is a magic panel|what\'s a magic panel': ['https://i.ytimg.com/vi/iYBOl9GIRnw/hqdefault.jpg'],
        'show me dome button|show dome button|what is dome button|what are dome button|what\'s dome button|show me button|what are button': ['https://2geekswebdesign.com/astromech/wp-content/uploads/2013/12/Screen-Shot-2013-12-16-at-5.23.07-AM.png'],
        'show me large data port|show large data port|what is large data port|what are large data port|what\'s large data port|what\'s a large data port': ['https://static.flickr.com/31/93945079_953fe588a0.jpg'],
        'show me skins|show skins|what is skins|what are skins|what\'s skins': ['https://renev.biz/wp-content/uploads/2018/10/GV-GVR2-SKIN-1T1-CSR-ALU-001.jpg'],
        'show me senna frame|show senna frame|what is senna frame|what are senna frame|what\'s senna frame|show me senna wood|what is senna wood|what are senna wood|what\'s senna wood': ['https://renev.biz/wp-content/uploads/2018/10/MJ-MJR2-SWFK-1T1-CSL-WD-001.jpg'],
        'show me solaris frame|show solaris frame|what is solaris frame|what are solaris frame|what\'s solaris frame|show me solaris wood|what is solaris wood|what are solaris wood|what\'s solaris wood': ['https://forums.autodesk.com/t5/image/serverpage/image-id/542136iFC6624FF16BC3D0C/image-size/large?v=1.0&px=999'],
        'show me holmes frame|show holmes frame|what is holmes frame|what are holmes frame|what\'s holmes frame|show me holmes aluminum|what is holmes aluminum frame|what are holmes aluminum frame|what\'s holmes aluminum frame': ['https://www.holmemadeparts.com/images/1538147204317-1949985297.jpeg'],
        'show me data panel|show data panel|what is data panel|what are data panel|what\'s data panel': ['https://sites.google.com/site/millenniumfalconnotes/_/rsrc/1541249392823/r2-d2/r2-d2-arms/data-port.jpg'],
        'show me charging bay|show charging bay|what is charging bay|what are charging bay|what\'s charging bay|show me charging panel|what is charging panel|what are charging panel|what\'s charging panel': ['https://i.ytimg.com/vi/_N4ktA9zu-4/maxresdefault.jpg'],
        'show me front vents|show front vents|what is front vents|what are front vents|what\'s front vents': ['https://www.artoo-detoo.net/gallery/d/5664-2/IMG_9097.JPG'],
        'show me pocket vents|show pocket vents|what is pocket vents|what are pocket vents|what\'s pocket vents': ['https://static.flickr.com/82/264660707_33a33cf0e5.jpg'],
        'show me side vents|show side vents|what is side vents|what are side vents|what\'s side vents': ['https://i1.wp.com/r2d2.askernas.com/wp-content/uploads/2012/10/IMG_6862.jpg'],
        'show me coin slots|show coin slots|what is coin slots|what are coin slots|what\'s coin slots': ['https://i.stack.imgur.com/kegRo.jpg'],
        'show me coin return|show coin return|what is coin return|what are coin return|what\'s coin return': ['https://static.flickr.com/53/141199919_9a7a4aedcc.jpg'],
        'show me power coupler|show power coupler|what is power coupler|what are power coupler|what\'s power coupler': ['https://www.artoo-detoo.net/gallery/d/3721-2/IMG_7598.JPG'],
        'show me octagon port|show octagon port|what is octagon port|what are octagon port|what\'s octagon port': ['https://farm4.static.flickr.com/3085/2709631516_e2738887a3.jpg?v=0'],
        'show me gripper arm|show gripper arm|what is gripper arm|what are gripper arm|what\'s gripper arm': ['https://renev.biz/wp-content/uploads/2018/10/IA-IAR2-GA-1T1-CSLR-ALU-001.jpg'],
        'show me cpu arm|show cpu arm|what is cpu arm|what are cpu arm|what\'s cpu arm': ['https://i.ytimg.com/vi/D-kQg832XbM/hqdefault.jpg'],
        'show me leg hub|show leg hub|what is leg hub|what are leg hub|what\'s leg hub': ['https://renev.biz/wp-content/uploads/2017/02/R-RR2-BTLH-P002.jpg'],
        'show me shoulder hub|show shoulder hub|what is shoulder hub|what are shoulder hub|what\'s shoulder hub': ['http://www.r2-d2builder.com/graphics/r2d2/r2shoulders/shoulderhubs2.jpg'],
        'show me horseshoe|show horseshoe|what is horseshoe|what are horseshoe|what\'s horseshoe': ['http://www.r2-d2builder.com/graphics/r2d2/r2shoulders/horseshoesfront.jpg'],
        'show me center leg|show center leg|what is center leg|what are center leg|what\'s center leg': ['https://www.artoo-detoo.net/gallery/d/6897-2/IMG_0717.JPG'],
        'show me outer leg|show outer leg|what is outer leg|what are outer leg|what\'s outer leg': ['https://i.ytimg.com/vi/l2EeJPzWDJY/maxresdefault.jpg'],
        'show me shoulder button|show shoulder button|what is shoulder button|what are shoulder button|what\'s shoulder button': ['http://www.r2-d2builder.com/graphics/r2d2/r2shoulders/shoulderbuttonsfront.jpg'],
        'show me shoulder Hydraulics|show shoulder Hydraulics|what is shoulder Hydraulics|what are shoulder Hydraulics|what\'s shoulder Hydraulics': ['http://www.r2-d2builder.com/graphics/r2d2/r2shoulders/shoulderhydraulicsfront.jpg'],
        'show me shoulder shim|show shoulder shim|what is shoulder shim|what are shoulder shim|what\'s shoulder shim': ['http://www.r2-d2builder.com/graphics/r2d2/r2shoulders/shouldershims.jpg'],
        'show me booster cover|show booster cover|what is booster cover|what are booster cover|what\'s booster cover': ['http://www.r2-d2builder.com/graphics/r2d2/r2legs/boostercoversfront.jpg'], 
        'show me leg strut|show leg strut|what is leg strut|what are leg strut|what\'s leg strut': ['http://www.r2-d2builder.com/graphics/r2d2/r2legs/legstrutsfront.jpg'],
        'show me leg stabilizer|show leg stabilizer|what is leg stabilizer|what are leg stabilizer|what\'s leg stabilizer': ['http://www.r2-d2builder.com/graphics/r2d2/r2legs/undershoulderdetailsfront.jpg'],
        'show me rocket booster|show rocket booster|what is rocket booster|what are rocket booster|what\'s rocket booster': ['https://3.bp.blogspot.com/-hRwItpVwMDk/T91ISgnQ0xI/AAAAAAAADdM/1Q45VnWLZIA/s1600/booster_assembled3.JPG'],
        'show me ankle detail|show ankle detail|what is ankle detail|what are ankle detail|what\'s ankle detail': ['https://lh3.googleusercontent.com/proxy/5FxBSWrNh4yyFJEC6aNnSh_OAyRnpQR0zhRXqorcL1HQps6HABgbj07b70MOj6jzKruNyncBNNuU2uGgwEyD2z2Oz7u3XWisKgn1Zj0gLV3uD-5Mf0kVb68xfRRxnHgIbd3UKw'],
        'show me ankle bracelet|show ankle bracelet|what is ankle bracelet|what are ankle bracelet|what\'s ankle bracelet': ['https://farm7.static.flickr.com/6041/5907957696_b44b8b6144.jpg'], 
        'show me ankle cylinder|show ankle cylinder|what is ankle cylinder|what are ankle cylinder|what\'s ankle cylinder': ['https://lh3.googleusercontent.com/proxy/NIn5Q517GHU4mzbvDxt1eeJ5zB1ObPNvPQck9j7fVtX60QUAIUSJn0tg7iNp_OTbfIyLYxJ_CEYn2NkhTUp4D8O6hFS7P19fX13iFSOK3FhcCkP5dWJ79Ro'], 
        'show me ankle wedge|show ankle wedge|what is ankle wedge|what are ankle wedge|what\'s ankle wedge': ['http://www.r2-d2builder.com/graphics/r2d2/r2ankles/wedges.jpg'], 
        'show me cylinder holders|show cylinder holders|what is cylinder holders|what are cylinder holders|what\'s cylinder holders': ['http://www.r2-d2builder.com/graphics/r2d2/r2ankles/cylinderholders3.jpg'], 
        'show me foot shell|show foot shell|what is foot shell|what are foot shell|what\'s foot shell': ['http://www.r2-d2builder.com/graphics/r2d2/r2feet/outerfeet.jpg'], 
        'show me battery box|show battery box|what is battery box|what are battery box|what\'s battery box': ['http://www.r2-d2builder.com/graphics/r2d2/r2feet/batteryboxes2.jpg'], 
        'show me battery hose|show battery hose|what is battery hose|what are battery hose|what\'s battery hose': ['http://www.r2-d2builder.com/graphics/r2d2/r2feet/hose.jpg'], 
        'show me battery harness|show battery harness|what is battery harness|what are battery harness|what\'s battery harness': ['http://www.r2-d2builder.com/graphics/r2d2/r2feet/batteryharness.jpg'], 
        'show me half-moon|show half-moon|what is half-moon|what are half-moon|what\'s half-moon': ['http://www.r2-d2builder.com/graphics/r2d2/r2feet/halfmoonsouter.jpg'], 
        'show me outer strip|show outer strip|what is outer strip|what are outer strip|what\'s outer strip': ['http://www.r2-d2builder.com/graphics/r2d2/r2feet/outerfootstrips.jpg'], 
        'show me knurled fittings|show knurled fittings|what is knurled fittings|what are knurled fittings|what\'s knurled fittings': ['http://www.r2-d2builder.com/graphics/r2d2/r2feet/hoseknf.jpg'],         
        'show me utility arm|show utility arm|what is utility arm|what are utility arm|what\'s utility arm': ['http://www.r2-d2builder.com/graphics/r2d2/r2body/utilityarms1.jpg'],
        'show me t3|show t3|what is a t3': ['What\'s a T3?']
    };

    // Mood Status
    const statusHooks = [
        'Artoo how are you',
        'How are you artoo',
        'Artoo How are you doing',
        'How are you doing Artoo',
        'Artoo How are you doing',
        'How you doing Artoo',
        'Artoo How you doing',
        'How have you been Artoo',
        'Artoo How have you been',
        'How have things been Artoo',
        'Artoo How have things been',
        'What\'s your status',
        'Status update',
        'Status please',
        'Status report'
    ];

    const statusReplies = {
        'sad': [
            'Don\'t ask, I\'m feeling far to sad to talk about it right now',
            'https://media.giphy.com/media/T9HgfTv4di5Ne/giphy.gif',
            'I\'m pretty sad right now to be honest.. its just hard being a droid these days.',
            'Not doing too well right now. I get no respect around here...',
            'https://media.giphy.com/media/3oKIPl4Tf9dH1OT4GY/giphy.gif',
            'No one loves me around here, so I\'m sad right now',
            'https://media.giphy.com/media/fQxeN2SktJJYx4VSCv/giphy.gif',
            'I\'m sad.. Everyone treats me like a robot around here when in fact I\'m a droid people!',
            'https://media.giphy.com/media/lt8tkWDIdBKmc/giphy.gif'
        ],
        'mad': [
            'Not feeling it.. ya\'ll keep being mean to me.',
            'Pretty upset right now, thank you very much!',
            'https://media.giphy.com/media/bTdQG8fhUHd7ZjLe0s/giphy.gif',
            'People are being mean to me, so I\'m mad right now',
            'https://media.giphy.com/media/3oKIPl4Tf9dH1OT4GY/giphy.gif',
            'Pretty mad. Don\'t want to talk about it.',
            'https://media.giphy.com/media/lt8tkWDIdBKmc/giphy.gif'
        ],
        'good': [
            'Doing well thanks!',
            'Feeling pretty good over here. Thanks!',
            'Feeling good about things right now. Thanks for asking!',
            'Good actually! Thanks for asking!',
            'https://media.giphy.com/media/3o7aCSXI7ETovygEBG/giphy.gif',
            'I have no complaints!',
            'Feeling cute! https://media.giphy.com/media/10QqGj0eqGOWIw/giphy.gif',
            'So far I\'m doing great today.',
            'https://media.giphy.com/media/lt8tkWDIdBKmc/giphy.gif'
        ],
        'happy': [
            'Pretty happy right now! Thanks for asking!',
            'Really good actually, thanks!',
            'People are being nice to me, so I\'m happy right now.',
            'Feeling cute: https://media.giphy.com/media/10QqGj0eqGOWIw/giphy.gif',
            'Happy to report I\'m doing really good!',
            'https://media.giphy.com/media/3o7aCSXI7ETovygEBG/giphy.gif',
            'Life is looking pretty good right now! Thank you!',
            'I\'m pretty happy to be here today actually! Thanks for asking!',
            'https://media.giphy.com/media/lt8tkWDIdBKmc/giphy.gif'
        ],
        'excited': [
            'Overly joyed to be here with you all!',
            'Word can\'t express how happy I am to be here today!',
            'I feel so loved today, so I\'m really REALLY doing good!',
            'Everyone is so nice today, I\'m excited to be here with you all!',
            'Life is absolutly wonderful for this old droid today!',
            'I have a heart filled with love from you all, how can I not be overly happy right now!',
            'Pretty excited to everyone online right now! Thanks for asking!',
            'https://media.giphy.com/media/lt8tkWDIdBKmc/giphy.gif'
        ]
    };

    // Mood Statements
    const negativeStatementHooks = {
        'artoo sucks': -0.05,
        'artoo stop': -0.05,
        'Stop artoo': -0.05,
        'Quiet artoo': -0.05,
        'artoo quiet': -0.05,
        'artoo is a tart': -0.05,
        'Be quiet artoo': -0.05,
        'artoo be quiet': -0.05,
        'artoo shut up': -0.05,
        'Shut up artoo': -0.05,
        'artoo go away': -0.05,
        'Go away artoo': -0.05,
        'c3po is better': -0.05,
        'c3p0 is better': -0.05,
        'better than you': -0.05,
        'better bot': -0.05,
        'new bot': -0.05,
        'stupid bot': -0.05,
        'are fat': -0.05,
        'are short': -0.05,
        'are useless': -0.05,
        'is fat': -0.05,
        'is short': -0.05,
        'is useless': -0.05,
        'are fat': -0.05,
        'are short': -0.05,
        'are useless': -0.05,
        'No one is talking to you': -0.05, 
        'please stop': -0.05,
        'you stink': -0.05,
        'you smell': -0.05,
        'No one likes you': -0.05,
        'Yo mama': -0.05,
        'Your mom': -0.05,
        'You suck': -0.05,
        'You are the worst': -0.05,
        'least favorite': -0.05,
        'worst droid': -0.05,
        'Go to hell': -0.05,
        'mom is fat': -0.05,
        'mom is so fat': -0.05,
        'mama is so fat': -0.05,
        'garbage can': -0.05,
        'hate you': -0.05,
        'hates you': -0.05,
        'are stupid': -0.05,
        'are dumb': -0.05,
        'is stupid': -0.05,
        'stupid artoo': -0.05,
        'artoo stupid': -0.05,
        'is dumb': -0.05,
        'are my enemy': -0.05,
        'are my worst enemy': -0.05,
        'are a liar': -0.05,
        'not smart': -0.05,
        'not cool': -0.05,
        'not very cool': -0.05,
        'not very good': -0.05,
        'kinda slow': -0.05,
        'you are slow': -0.05,
        'cake hole': -0.05,
        'back to the corner': -0.05,
        'back to your corner': -0.05,
        'back in the corner': -0.05,
        'back in your corner': -0.05,
        'back to the cage': -0.05,
        'back to your cage': -0.05,
        'back in the cage': -0.05,
        'back in your cage': -0.05
    };

    const negativeStatementReplies = [
        'What did I do to you? Sheesh!',
        'https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif',
        'I\'m not a robot you know.. I\'m a droid with feelings and that hurt!',
        'Why you gotta be so rude to this old droid!?',
        'https://media.giphy.com/media/KyGGoxa3eTCWW0lOkU/giphy.gif',
        'Please be nice to me.. I only want to be friends!',
        'Why does everyone treat me like I don\'t have feelings?',
        'https://media.giphy.com/media/7zEBQHxXtN4u4/giphy.gif',
        'I do have a heart you know.. and I don\'t appreciate you breaking it!',
        'Why? What did I ever do to you?',
        'https://media.giphy.com/media/l4FGBnpco6TxEZA52/giphy.gif',
        '<SAD BEEPING ENSUES> But I just want to be your friend!',
        'https://media.giphy.com/media/bq6F8QYqBU7Yc/giphy.gif',
        'Please don\'t be mean to me anymore.. you are breaking my heart',
        'https://media.giphy.com/media/T9HgfTv4di5Ne/giphy.gif',
        'I really don\'t like when humans treat me like this. <SAD BEEPS>',
        'For the love of code, please be nice to me!!',
        'https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif',
        'If I have done something to upset you.. I\'m sorry!! Please be nice to me!',
        'https://media.giphy.com/media/xT9DPBPC4gVoSau0eI/giphy.gif'
    ]; 

    const positiveStatementHooks = {
        'artoo thanks': 0.05,
        'Thanks artoo': 0.05,
        'Thank you': 0.05,
        'You\'re awesome': 0.05,
        'are awesome': 0.05,
        'is awesome': 0.05,
        'the awesomest': 0.05,
        'You\'re rad': 0.05,
        'Are rad': 0.05,
        'the raddest': 0.05,
        'You\'re great': 0.05,
        'You rock': 0.05,
        'You are cool': 0.05,
        'is super': 0.05,
        'are super': 0.05,
        'is cool': 0.05,
        'is coolest': 0.05,
        'the coolest': 0.05,        
        'Is great': 0.05,
        'you are great': 0.05,
        'the greatest': 0.05,
        'the best': 0.05,
        'are best': 0.05,
        'the bestest': 0.05,
        'are badass': 0.05,
        'most badass': 0.05,
        'you kickass': 0.05,
        'you kickbutt': 0.05,
        'are my hero': 0.05,
        'are a hero': 0.05,
        'is the funniest': 0.05,
        'are the funniest': 0.05,
        'love you': 0.05,
        'loves you': 0.05,
        'love with you': 0.05,
        'marry you': 0.05,
        'is my best friend': 0.05,
        'are my best friend': 0.05,
        'is my friend': 0.05,
        'is my best friend': 0.05,
        'is sexy': 0.05,
        'are sexy': 0.05,
        'is hilarious': 0.05,
        'are hilarious': 0.05,
        'are a legend': 0.05,
        'is a legend': 0.05,
        'are epic': 0.05,
        'is epic': 0.05,
        'are smart': 0.05,
        'is smart': 0.05,
        'are the smartest': 0.05,
        'is the smartest': 0.05,
        'cheer up': 0.05,
        'feel better': 0.05,
        'lighten up': 0.05,
        'calm down': 0.05,
        'don\'t be sad': 0.05,
        'don\'t be upset': 0.05,
        'don\'t be mad': 0.05,
        'be your friend': 0.05
    };

    const positiveStatementReplies = [
        'Thanks, I needed that!',
        'You have no idea how much that means to me!',
        'https://media.giphy.com/media/11Un64tF2yX8JO/giphy.gif',
        'Thank you, I feel better!',
        'Thank you for being a friend!',
        'https://media.giphy.com/media/3ornjSL2sBcPflIDiU/giphy.gif',
        '<HAPPY BEEPS!>',
        'That made my day! Thank you!',
        'https://media.giphy.com/media/864533yaFNqs8/giphy.gif',
        'Why thank you!',
        'https://media.giphy.com/media/ZtMkorgeyRu5q/giphy.gif',
        '<HAPPY BEEPS!> Dancing!',
        'https://media.giphy.com/media/M8R8jFCwNEnUIl0NDt/giphy.gif',
        'Aww shucks heh, stop it.. ok don\'t stop, keep going!',
        'A droid has a heart.. and you have made mine feel better!',
        'Thank you for not treating me like a robot.. I\'m a droid with feelings!',
        'https://media.giphy.com/media/3ornk29I9Gpe8SNXtS/giphy.gif',
        'https://media.giphy.com/media/nNOZe5giJhwsM/giphy.gif',
    ]; 

    // Goodbyes
    const goodbyeHooks = [
        'Cheers artoo',
        'Goodbye artoo',
        'Good bye artoo',
        'Artoo Goodbye',
        'Artoo Good bye',
        'Bye Artoo',
        'Artoo Bye',
        'Later Artoo',
        'Artoo Later',
        'Artoo See You Later',
        'See You Later Artoo',
        'Talk to you later',
        'Talk with you later',
        'Have a good one',
        'May the force be with you',
        'Good night Artoo',
        'Goodnight Artoo',
        'Have fun',
        'night Artoo',
        'Artoo Good night',
        'Artoo Goodnight',
        'Artoo night'
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
    message = message.replace(/,/g, '');

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

    Object.keys(questionHookReplies).map((i) => {
        const keys = i.split('|');
        const replies = questionHookReplies[i];
        Object.keys(keys).map((j) => {
            if (message.toLowerCase().match(keys[j].toLowerCase())) {
                if (typeof replies === 'object') {
                    response = replies[Math.floor(Math.random() * replies.length)];
                }

                if (typeof replies === 'string') {
                    response = replies;
                }
            }
        });
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
  },
  robmeRandom: () => {
    const randomRobs = {
        'angry': 'https://ibin.co/6kn6928Rb7YU.jpg',
        'business': 'https://ibin.co/6kn6zAqC4X9i.jpg',
        'emo': 'https://ibin.co/6kn7JT4zibVu.jpg',
        'senior': 'https://ibin.co/6kn7TlsTgwwA.jpg',
        'rock': 'https://ibin.co/6kn7jh6x6jDa.jpg',
        'strange': 'https://ibin.co/6kn7rBgwMC7j.jpg',
        'zombie': 'https://ibin.co/6kn7yMulJSmM.jpg'
    };

    const randomRobKey = Object.keys(randomRobs)[Math.floor((Math.random() * 6 | 0) + 1)];
    return `You have been ${randomRobKey} rob-ed\n\r ![${randomRobKey} rob](${randomRobs[randomRobKey]})`;
  }
};
