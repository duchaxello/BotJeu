const { getUserFromMention } = require('../functions/mentions.js');


module.exports = {
  name: 'welcome',
  description: 'Accueille chaleureusement la personne mentionnée ou tout le monde.',
  /* args : définit la nécessité des arguments pour cette commande. */
  args: false,
  execute(message, args, lang) {
    if (args[0]) {
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.channel.send(args[0] + lang.wrongMentionForWelcome);
      }

      return message.channel.send(lang.welcomeOtherMember(user));
    }

    return message.channel.send('@everyone' + lang.welcomeEveryone);
  },
};
