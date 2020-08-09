var jokeArray = [
    "What's the internal temperature of a Tauntaun?\n Lukewarm",
    "Why did Episodes 4, 5, and 6 come out before 1, 2, and 3?\n Because in charge of directing, Yoda was.",
    "What did Darth Vader say when he walked into a vegetarian restaurant?\n I find your lack of steak disturbing.",
    "How does Wicket get around Endor?\n Ewoks.",
    "What do you call five Siths piled on top of a lightsaber?\n A Sith-Kebab.",
    "What do you call stormtroopers playing Monopoly?\n Game of Clones.",
    "Where did Luke get his bionic hand?\n At the second-hand store.",
    "What do you call an invisible droid?\n C-through-PO.",
    "Where do Gungans store their fruit preserves?\n Jar-Jars.",
    "What do you call it when only one Star Wars character gives you a round of applause?\n A Hand Solo.",
    "What goes - Ha, ha, ha, haaaa…. AGGGHHHH! Thump?\n An Imperial Officer laughing at Darth Vader.",
    "Why is Yoda such a good gardener?\n Because he has a green thumb.",
    "How do you unlock doors on Kashyyyk?\n With a woo-kiee.",
    "Which program do Jedi use to open PDF files?\n Adobe-Wan Kenobi",
    "What did Darth Vader say to the Emperor at the Star Wars auction?\n What is thy bidding, my master?",
    "What side of an Ewok has the most hair?\n The outside.",
    "What did Obi-Wan tell Luke when his young apprentice was having a difficult time using chopsticks at the Chinese restaurant?\n Use the forks, Luke",
    "What do you get if you mix a bounty hunter with a tropical fruit?\n Mango Fett",
    "How do Tusken Raiders cheat on their taxes?\n They always single file, to hide their numbers.",
    "What time is it when an AT-AT steps on your chronometer?\n Time to get a new chronometer.",
    "Why are Death Star pilots fed up with space battles?\n Because they always end up in a TIE",
    "What's a Rebel's favorite TV talent show?\n X-Wing Factor",
    "Is BB hungry?\n No, BB-8",
    "How does Darth Vader like his toast?\n On the Dark Side.",
    "Have you tried the gluten-free Wookiee treats?\n No, but I heard they are a little Chewy.",
    "Why was the droid angry?\n Because people kept pushing its buttons.",
    "How do Ewoks communicate over long distances?\n With Ewokie Talkies.",
    "How did Darth Vader cheat at poker?\n He kept altering the deal",
    "What do you need to reroute droids?\n R2-Detour.",
    "What did Han Solo say to the waiter who recommended the haddock?\n Never sell me the cods!",
    "Which Jedi became a rock star?\n Bon Jovi-Wan Kenobi",
  ];
  var textArray = [
    "Here's a joke, ",
    "Here's one for you, ",
    "Have you heard this one? ",
    "I just came up with this one, I promise! ",
  ]

module.exports = {
    generateJoke: function() {
      randomJoke = textArray[Math.floor(Math.random() * textArray.length)];
      var randomArray = jokeArray[Math.floor(Math.random() * jokeArray.length)];
      return randomJoke + randomArray;
    }
  };