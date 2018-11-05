const database = require('../functions/db.js');
const embed = require('../functions/embed.js');
const { getUserFromMention } = require('../functions/mentions.js');

module.exports = {
  name: 'admire',
  description: 'Montre les stats de Maglubiyet Le Puissant ou d\'un gobelin mentionné',
  args: false,
  usage: '',
  async execute(message, args, lang) {
    if (args[0]) {
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.reply(lang.wrongMentionForAdmiration);
      }
      database.characters.getCharacterByUserId(user.id)
        .then(function(response) {
          if (response == null) {
            message.channel.send(lang.noCharacterForAdmiration);
          } else {
            message.channel.send(embed.character(response));
          }
        })
    } else {
      database.gods.findOne({})
      .then(function(response) {
        if (response == null) {
          throw 'ERROR : no god available';
        }
        message.channel.send(embed.god(response));
      })
      .catch((err) => {
        throw err;
      });
    }
  }
};
