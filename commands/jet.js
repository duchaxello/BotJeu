const jeuxDeDes = require('../jeuxDeDes.js');

module.exports = {
  name: 'jet',
  description: 'Lance des dés',
  args: true,
  usage: ' <nombre de dés>d<taille des dés à lancer>',
  execute(message, args, lang) {
    message.channel.send(jeuxDeDes.lancerDes(args[0]));
  },
};
