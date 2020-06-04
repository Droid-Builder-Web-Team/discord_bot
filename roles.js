const csv = require('csv-parser');
const fs = require('fs');

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
    var i;
    var assigned = 0;
    for (i = 0; i < roles.length;i++) {
      if (roles[i].name == role) {
        message.member.addRole(role.id);
        assigned = 1;
      }
    }
    if (assigned = 0) {
      message.reply("Unknown role");
    }
    if (role == 'help') {
      output = "The following roles are available: \n";
      for (i = 0; i < roles.length;i++) {
        output += "\t" + roles[i].name + "\n";
      }
      message.reply(output);
    }

  }
};
