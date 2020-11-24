var welcomeArray = [
    "Welcome ${member}, we've been expecting you",
    "May the force be with you, ${member}"
  ];

module.exports = {
    generateWelcome: function() {
      randomWelcome = textArray[Math.floor(Math.random() * textArray.length)];
      return randomWelcome;
    }
  };
