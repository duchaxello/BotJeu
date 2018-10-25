const { client } = require('../bot.js');

module.exports = {

  /* Fonction potentiellement provisoire qui récupère l'id d'une mention si le format est correct. */
  getUserFromMention: function(mention) {
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (matches) {
      const id = matches[1];
      return client.users.get(id);
    }
    return;
  }
}
