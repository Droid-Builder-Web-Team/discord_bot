# Artoo Bot

This is a simple bot for the Droid Builders Discord server.

Artoo bot comes with:
- Command based interactions
- Conversatinal based interactions
- Math based interactions

Basic commands are:
- !help
- !role
- !ping
- !quote
- !neverhaveiever
- !weather
- !joke
- !links
- !link-suggestion

** !help
This will give you a list of avaible commands in discord if you need to see this list in context of the chat.

** !role
This will define your builder role, or rather what builds you are currently doing.

** !ping
This is a simple debug command to ensure Artoo is alive and well.

** !quote
This will return a random Star Wars movie quote to the given channel you are under.

** !neverhaveiever
This will return a random "never have i" quote from Artoo in the given channel you are under.

** !weather
This will return a random weather report in the given channel you are under.

** !joke
This will return a random joke to the given channel you are under.

** !links
This will return a list of all, or specificly requested list in the given channel you are under.
Available link list categories are (| denotes more than one way to request a list):
- !links r2|r2d2|r-series|r series
- !links a-lt
- !links t3|t-series|t series
- !links bd1|bd-series|bd series
- !links b1|battle|battle droid
- !links mouse|mouser|mse|mse-series|mse series
- !links probe|imperial probe
- !links bb8|bb-series|bb series
- !links fx-7
- !links pit|pit droid
- !links 2-1b|medical droid
- !links chopper
- !links ig|ig unit
- !links gonk
- !links d-o
- !links rx-23|pilot|rex
- !links groups|general|builders|generic


** Artoo call sign
When talking directly to artoo you will only get him to respond if you have used the `artoo` call sign at the begining or end of your sentence.

** Moods
Artoo has a set of moods that are weight to his conversational interactions.
- mad
- sad
- good
- happy
- excited

Depending on how you interact with artoo under conversation, his mood at any given point of the day can change. This means if you are being nice to artoo, his mood will get better; mean to artoo and his day will get worse.

You can get a report of Artoo's current moods by using the following "status hooks":
- Artoo how are you
- How are you artoo
- Artoo How are you doing
- How are you doing Artoo
- Artoo How are you doing
- How you doing Artoo
- Artoo How you doing
- How have you been Artoo
- Artoo How have you been
- How have things been Artoo
- Artoo How have things been
- What's your status
- Status update
- Status please
- Status report

** Positive Conversation Hooks
These hooks used in conjunction with artoo's call sign will increase his mood: 

- Artoo thanks
- Thanks artoo
- Thank you
- You\'re awesome
- are awesome
- is awesome
- the awesomest
- You\'re rad
- Are rad
- the raddest
- You\'re great
- You rock
- You are cool
- is super
- are super
- is cool
- is coolest
- the coolest        
- Is great
- you are great
- the greatest
- the best
- are best
- the bestest
- are badass
- most badass
- you kickass
- you kickbutt
- are my hero
- are a hero
- is the funniest
- are the funniest
- love you
- loves you
- love with you
- marry you
- is my best friend
- are my best friend
- is my friend
- is my best friend
- is sexy
- are sexy
- is hilarious
- are hilarious
- are a legend
- is a legend
- are epic
- is epic
- are smart
- is smart
- are the smartest
- is the smartest
- cheer up
- feel better
- lighten up
- calm down
- don\'t be sad
- don\'t be upset
- don\'t be mad
- be your friend


** Negative Conversation Hooks
These hooks used in conjunction with artoo's call sign will decrease his mood:

- Artoo sucks
- Artoo stop
- Stop artoo
- Quiet artoo
- Artoo quiet
- Be quiet artoo
- artoo be quiet
- Artoo shut up
- Shut up artoo
- Artoo go away
- Go away artoo
- c3po is better
- c3p0 is better
- better than you
- better bot
- new bot
- stupid bot
- are fat
- are short
- are useless
- is fat
- is short
- is useless
- are fat
- are short
- are useless
- No one is talking to you 
- please stop
- you stink
- you smell
- No one likes you
- Yo mama
- Your mom
- You suck
- You are the worst
- least favorite
- worst droid
- Go to hell
- mom is fat
- mom is so fat
- mama is so fat
- garbage can
- hate you
- hates you
- are stupid
- are dumb
- is stupid
- stupid artoo
- artoo stupid
- is dumb
- are my enemy
- are my worst enemy
- are a liar
- not smart
- not cool
- not very cool
- not very good
- kinda slow
- you are slow
- cake hole
- back to the corner
- back to your corner
- back in the corner
- back in your corner
- back to the cage
- back to your cage
- back in the cage
- back in your cage


** Hello Conversation Hooks
These hooks used in conjunction with artoo's call sign will trigger a hello response:
- Artoo Hi
- Hello Artoo
- Artoo Hello
- Howdy Artoo
- Artoo Howdy
- Morning Artoo
- Artoo Morning
- Good morning
- Good Evening
- Artoo Evening      
- Evening Artoo


** Goodbye Conversation Hooks
These hooks used in conjunction with artoo's call sign will trigger a goodbye response:

- Cheers artoo
- Goodbye artoo
- Good bye artoo
- Artoo Goodbye
- Artoo Good bye
- Bye Artoo
- Artoo Bye
- Later Artoo
- Artoo Later
- Artoo See You Later
- See You Later Artoo
- Talk to you later
- Talk with you later
- Have a good one
- May the force be with you
- Good night Artoo
- Goodnight Artoo
- Have fun
- night Artoo
- Artoo Good night
- Artoo Goodnight
- Artoo night

** General Question Hooks
These hooks used in conjunction with artoo's call sign and will trigger a response to your question:
- can you do|else you can do
- who are you
- you come from|you from
- do you live
- you real
- you a bot
- what processor
- made you
- tall are you
- fast are you|fast can you
- are you single'
- old are you
- where is
- Whats up|Sup Artoo|Artoo Sup|what you doing|what are you doing
- whats new
- anything new

** General Statement Hooks
These hooks used in conjunction with artoo's call sign will trigger a response to your statement:
- it was a joke|take a joke|was only a joke
- say hello|say good morning|say morning|say good night|say night|say good afternoon|say afternoon|say good evening|say evening
- power down|to sleep|turn off|power off|sleep mode|shut down|shut off

** Part Request Hooks
These hooks used in conjunction with artoo's call sign will trigger a screenshot response to your requested part:

- show me dome | show dome | show me dome dome | what are dome | what is dome | what are dome
- show me body | show body | show me body | what are body | what is body | what are body
- show me legs | show legs | show me legs | what are legs | what is legs | what are legs
- show me pies | show pies | show me dome pies | what are pies | what is dome pies | what are dome pies | what are pies
- show me dome topper | show dome topper | what are dome toppers | what is dome topper | what is a dome topper
- show me holoprojector | show holoprojector | what are holoprojectors | what is a holoprojector | what\'s a holoprojector
- show me radar eye | show radar eye | what is a radar eye | what are radar eye | what\'s a radar eye
- show me psi | show psi | what is psi | what are psi | what\'s psi | show me front psi | what is front psi | what are front psi | what\'s front psi | show me back psi | what is back psi | what are back psi | what\'s back psi
- show me front logic | show front logic | what is front logic | what are front logic | what\'s front logic | show me FLD | what is FLD | what are FLD | what\'s FLD
- show me rear logic | show rear logic | what is rear logic | what are rear logic | what\'s rear logic | show me RLD | what is RLD | what are RLD | what\'s RLD
- show me dome lights | what is dome lights | what are dome lights | what\'s dome lights
- show me logic lights | show logic lights | what is logic lights | what are logic lights | what\'s logic lights
- show me teeces | show teeces | what is teeces | what are teeces | what\'s teeces
- show me LFS | show LFS | what is LFS | what are LFS | what\'s LFS
- show me life form scan | show life form scan | what is life form scan | what are life form scan | what\'s life form scan
- show me periscope | show periscope | what is periscope | what are periscope | what\'s periscope | show me dome periscope | what is dome periscope | what are dome periscope | what\'s dome periscope
- show me magic panel | show magic panel | what is magic panel | what are magic panel | what\'s magic panel | show me a magic panel | what is a magic panel | what\'s a magic panel
- show me dome button | show dome button | what is dome button | what are dome button | what\'s dome button | show me button | what are button
- show me large data port | show large data port | what is large data port | what are large data port | what\'s large data port | what\'s a large data port
- show me skins | show skins | what is skins | what are skins | what\'s skins
- show me senna frame | show senna frame | what is senna frame | what are senna frame | what\'s senna frame | show me senna wood | what is senna wood | what are senna wood | what\'s senna wood
- show me solaris frame | show solaris frame | what is solaris frame | what are solaris frame | what\'s solaris frame | show me solaris wood | what is solaris wood | what are solaris wood | what\'s solaris wood
- show me holmes frame | show holmes frame | what is holmes frame | what are holmes frame | what\'s holmes frame | show me holmes aluminum | what is holmes aluminum frame | what are holmes aluminum frame | what\'s holmes aluminum frame
- show me data panel | show data panel | what is data panel | what are data panel | what\'s data panel
- show me charging bay | show charging bay | what is charging bay | what are charging bay | what\'s charging bay | show me charging panel | what is charging panel | what are charging panel | what\'s charging panel
- show me front vents | show front vents | what is front vents | what are front vents | what\'s front vents
- show me pocket vents | show pocket vents | what is pocket vents | what are pocket vents | what\'s pocket vents
- show me side vents | show side vents | what is side vents | what are side vents | what\'s side vents
- show me coin slots | show coin slots | what is coin slots | what are coin slots | what\'s coin slots
- show me coin return | show coin return | what is coin return | what are coin return | what\'s coin return
- show me power coupler | show power coupler | what is power coupler | what are power coupler | what\'s power coupler
- show me octagon port | show octagon port | what is octagon port | what are octagon port | what\'s octagon port
- show me gripper arm | show gripper arm | what is gripper arm | what are gripper arm | what\'s gripper arm'
- show me cpu arm | show cpu arm | what is cpu arm | what are cpu arm | what\'s cpu arm'
- show me leg hub | show leg hub | what is leg hub | what are leg hub | what\'s leg hub'
- show me shoulder hub | show shoulder hub | what is shoulder hub | what are shoulder hub | what\'s shoulder hub'
- show me horseshoe | show horseshoe | what is horseshoe | what are horseshoe | what\'s horseshoe'
- show me center leg | show center leg | what is center leg | what are center leg | what\'s center leg'
- show me outer leg | show outer leg | what is outer leg | what are outer leg | what\'s outer leg'
- show me shoulder button | show shoulder button | what is shoulder button | what are shoulder button | what\'s shoulder button'
- show me shoulder Hydraulics | show shoulder Hydraulics | what is shoulder Hydraulics | what are shoulder Hydraulics | what\'s shoulder Hydraulics'
- show me shoulder shim | show shoulder shim | what is shoulder shim | what are shoulder shim | what\'s shoulder shim'
- show me booster cover | show booster cover | what is booster cover | what are booster cover | what\'s booster cover'
- show me leg strut | show leg strut | what is leg strut | what are leg strut | what\'s leg strut'
- show me leg stabilizer | show leg stabilizer | what is leg stabilizer | what are leg stabilizer | what\'s leg stabilizer'
- show me rocket booster | show rocket booster | what is rocket booster | what are rocket booster | what\'s rocket booster'
- show me ankle detail | show ankle detail | what is ankle detail | what are ankle detail | what\'s ankle detail'
- show me ankle bracelet | show ankle bracelet | what is ankle bracelet | what are ankle bracelet | what\'s ankle bracelet'
- show me ankle cylinder | show ankle cylinder | what is ankle cylinder | what are ankle cylinder | what\'s ankle cylinder'
- show me ankle wedge | show ankle wedge | what is ankle wedge | what are ankle wedge | what\'s ankle wedge'
- show me cylinder holders | show cylinder holders | what is cylinder holders | what are cylinder holders | what\'s cylinder holders'
- show me foot shell | show foot shell | what is foot shell | what are foot shell | what\'s foot shell'
- show me battery box | show battery box | what is battery box | what are battery box | what\'s battery box' 
- show me battery hose | show battery hose | what is battery hose | what are battery hose | what\'s battery hose' 
- show me battery harness | show battery harness | what is battery harness | what are battery harness | what\'s battery harness' 
- show me half-moon | show half-moon | what is half-moon | what are half-moon | what\'s half-moon'
- show me outer strip | show outer strip | what is outer strip | what are outer strip | what\'s outer strip'
- show me knurled fittings | show knurled fittings | what is knurled fittings | what are knurled fittings | what\'s knurled fittings'        
- show me utility arm | show utility arm | what is utility arm | what are utility arm | what\'s utility arm'

** Conversion maths
Artoo can convert differnt units of measurement such as mm to inches. Here is a list of all different avaialble units of measurement artoo can convert:

```
'mm': 'millimeter|millimeters', 
'cm': 'centimeter|centimeters', 
'm': 'meter|meters', 
'in': 'inch|inches', 
'ft': 'feet|foot',  
'mi': 'mile|miles',
'mcg': 'microgram|micrograms',
'mg': 'milligram|milligrams', 
'g': 'gram|grams', 
'kg': 'kilogram|kilograms', 
'oz': 'ounce|ounces', 
'lb': 'pound|pounds', 
'mt': 'megatonne|megatonnes', 
't': 'ton|tons', 
'ml': 'milliliter|milliliters', 
'l': 'liter|liters', 
'tsp': 'teaspoon|teaspoons', 
'tbs': 'tablespoon|tablespoons', 
'fl-oz': 'fluid ounce|fluid ounces', 
'cup': 'cup|cups', 
'pnt': 'pint|pints', 
'qt': 'quart|quarts', 
'gal': 'gallon|gallons'
```

Valid conversion requests are as follows (note you can use full or abreviated units):
- artoo, convert 1mm to inches
- artoo, convert 1 milimeter to in
- artoo, what is 1 kilogram in feet