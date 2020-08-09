var jokeArray = [
    "What's the internal temperature of a Tauntaun?\n Lukewarm",
    "Why did Episodes 4, 5, and 6 come out before 1, 2, and 3?\n Because in charge of directing, Yoda was.",
    "What did Darth Vader say when he walked into a vegetarian restaurant?\n I find your lack of steak disturbing.",
    "How does Wicket get around Endor?\n Ewoks.",
    "What do you call five Siths piled on top of a lightsaber?\n A Sith-Kebab."
]

module.exports = {
    generateJoke: function() {
      randomJoke = "Here's a joke,  ";
      var randomArray = jokeArray[Math.floor(Math.random() * jokeArray.length)];
      return randomJoke + randomArray;
    }
  };