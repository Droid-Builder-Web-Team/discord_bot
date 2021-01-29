const welcomeArray = [
  "Welcome MEMBER_NAME, we've been expecting you",
  "May the force be with you, MEMBER_NAME",
  "Help me MEMBER_NAME, you're our only hope",
  "MEMBER_NAME, we're home!",
  "MEMBER_NAME, I'll be there for you. Cassian said I had to."
];

const welcomeZoomLink = 'Find us daily on the "N@d@" zoom channel: https://tinyurl.com/y3knc9fz';
const welcomeHelpReminder = 'Use !help to see all my available commands.';

const getRandomWelcome = (member) => welcomeArray[
  Math.floor(Math.random() * welcomeArray.length)
].replace(
  'MEMBER_NAME', 
  member.user
);

module.exports = {
    generateWelcome: (member) => `${getRandomWelcome(member)}\n\r${welcomeZoomLink}\n\r${welcomeReminder}`
};
