var welcomeArray = [
    "Welcome MEMBER_NAME, we've been expecting you",
    "May the force be with you, MEMBER_NAME",
    "Help me MEMBER_NAME, you're our only hope",
    "MEMBER_NAME, we're home!",
    "MEMBER_NAME, I'll be there for you. Cassian said I had to.",
    "MEMBER_NAME, Hello There...",
    "Hide your Tauntauns, Banthas and Beskar... MEMBER_NAME is here...",
    "MEMBER_NAME you\'re on this server... and we do grant you the rank of member!"
  ];

module.exports = {
  generateWelcome: function() {
    return `${welcomeArray[Math.floor(Math.random() * welcomeArray.length)]}\nWe have regular Cantina Chats right here in Discord, make yourself at home! Fellow droid builders are always welcome!`;
  }
};
