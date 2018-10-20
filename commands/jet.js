const jeuxDeDes = require('../jeuxDeDes.js');

module.exports = {
  name: 'jet',
  description: 'Lance des dés',
  execute(message, args, lang) {
    message.channel.send(jeuxDeDes.lancerDes(args[0]));
  },
};
