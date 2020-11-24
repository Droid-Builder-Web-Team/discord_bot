var welcomeArray = [
    "Welcome ${member}, we've been expecting you",
    "May the force be with you, ${member}"
  ];

module.exports = {
    generateWelcome: function() {
      randomWelcome = welcomeArray[Math.floor(Math.random() * welcomeArray.length)];
      return randomWelcome;
    }
  };
