const { client } = require('../bot.js');


/* Fonction potentiellement provisoire qui récupère l'id d'une mention si le format est correct. */
function getUserFromMention(mention) {
  const matches = mention.match(/^<@!?(\d+)>$/);
  if (matches) {
    const id = matches[1];
    return client.users.get(id);
  }
  return;
}

module.exports = {
  name: 'avatar',
  description: 'Montre l\'avatar de la personne mentionnée, ou si pas de paramètre celle de l\'auteur du message',
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
