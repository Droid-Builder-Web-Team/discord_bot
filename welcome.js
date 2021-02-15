var welcomeArray = [
    "Welcome MEMBER_NAME, we've been expecting you",
    "May the force be with you, MEMBER_NAME",
    "Help me MEMBER_NAME, you're our only hope",
    "MEMBER_NAME, we're home!",
    "MEMBER_NAME, I'll be there for you. Cassian said I had to."
  ];

module.exports = {
  generateWelcome: function() {
    randomWelcome = welcomeArray[Math.floor(Math.random() * welcomeArray.length)];
    return randomWelcome;
  }
};