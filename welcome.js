var welcomeArray = [
    "Welcome MEMBER_NAME, we've been expecting you",
    "May the force be with you, MEMBER_NAME"
  ];

module.exports = {
    generateWelcome: function() {
      randomWelcome = welcomeArray[Math.floor(Math.random() * welcomeArray.length)];
      return randomWelcome;
    }
  };
