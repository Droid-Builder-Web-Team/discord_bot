const csv = require('csv-parser');
const fs = require('fs');

const RSERIES = '717758445956104212';
const TSERIES = '717758451916210187';
const BBSERIES = '717758449206820895';
const CSERIES = '717758459080343565';
const MSE = '717758456576081970';
const GONK = '717758461651320864';
const KSERIES = '717758453912830023';
const PROTOCOL = '717758463400345681';

var roles = [];

fs.createReadStream(process.env.ROLE_LIST + '.csv')
  .pipe(csv())
  .on('data', (row) => {
    roles.push(row);
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file of roles processed');
  });

console.log(roles)

module.exports = {
  grantRole: function(role, message) {
    if (role == null) {
      role = 'help'
    }
    switch(role.toLowerCase()) {
      case 'r-series':
        message.member.addRole(RSERIES);
        break;
      case 't-series':
        message.member.addRole(TSERIES);
        break;
      case 'bb-series':
        message.member.addRole(BBSERIES);
        break;
      case 'c-series':
        message.member.addRole(CSERIES);
        break;
      case 'mse':
        message.member.addRole(MSE);
        break;
      case 'gonk':
        message.member.addRole(GONK);
        break;
      case 'k-series':
        message.member.addRole(KSERIES);
        break;
      case 'protocol':
        message.member.addRole(PROTOCOL);
        break;
      case 'help':
        message.reply("The following roles are available: ");
        break;
      default:
        message.reply("Unknown role");
    }
  }
};
