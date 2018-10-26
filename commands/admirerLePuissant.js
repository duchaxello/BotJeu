const database = require('../functions/db.js');
const embed = require('../functions/embed.js');

module.exports = {
  name: 'admire',
  description: 'Montre les stats de Maglubiyet Le Puissant',
  args: false,
  usage: '',
  async execute(message, args, lang) {
    // database.gods.addMaglubiyet();
    // const maglubiyet = await (database.gods.findOne({}));
    // console.log('Maglubiyet ---> ', maglubiyet);
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
};
