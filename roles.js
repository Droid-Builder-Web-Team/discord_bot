const csv = require('csv-parser');
const fs = require('fs');

var roles = [];

// Read in CSV file, as defined by the ROLE_LIST environment variable
fs.createReadStream(process.env.ROLE_LIST + '.csv')
  .pipe(csv())
  .on('data', (row) => {
    roles.push(row); // Add to roles array
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file of roles processed');
  });

module.exports = {
  grantRole: function(role, message) {
    if (role == null) {
      role = 'help'
    }
    var i;
    var assigned = 0;
    for (i = 0; i < roles.length;i++) {
      if (roles[i].name == role) {
        message.member.addRole(roles[i].id);
        assigned = 1;
      }
    }
    if (assigned = 0) {
      message.reply("Unknown role");
      role = 'help';
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
