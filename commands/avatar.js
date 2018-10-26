const { getUserFromMention } = require('../functions/mentions.js');


module.exports = {
  name: 'avatar',
  description: 'Montre l\'avatar de la personne mentionnée, ou si pas de paramètre celle de l\'auteur du message',
  /* args : définit la nécessité des arguments pour cette commande. */
  args: false,
  execute(message, args, lang) {
    if (args[0]) {
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.reply(lang.wrongMentionForAvatar);
      }

      return message.channel.send(lang.otherAvatarDisplay + user.displayAvatarURL);
    }

    return message.channel.send(lang.selfAvatarDisplay + message.author.displayAvatarURL);
  },
};
