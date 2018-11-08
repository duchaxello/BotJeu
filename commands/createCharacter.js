const Discord = require('discord.js');
const database = require('../functions/db.js');
const embed = require('../functions/embed.js');
// const { getUserFromMention } = require('../functions/mentions.js');
const hasard = require('../functions/jeuxDeDes.js');

module.exports = {
  name: 'create',
  description: 'Crée un personnage pour le compte Discord qui lance la commande.',
  args: false,
  usage: '',
  async execute(message, args, lang) {

    const existingCharacter = database.characters.getCharacterByUserId(message.author.id);
    console.log(existingCharacter);
    if (existingCharacter) {
      message.reply(lang.chooseToCreateCharacter);
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
      console.log(collector)
      collector.on('collect', message => {
        if (message.content == 'haha') {
          message.reply(lang.chosenToCreate);
          database.characters.deleteCharacterByUserId(message.author.id);
          message.reply(embed.character(this.createCharacter(message)));
        } else {
          message.reply(lang.chosenNotToCreate);
        }
      });
    } else {
      this.createCharacter(message);
    }
  },
  createCharacter: function(message) {
    let charac = {};
    console.log(message.author.id);
    charac.userId = message.author.id;
    charac.stats = database.characters.rollStats();
    charac.name = hasard.getRandomGoblinName();
    charac.hpMax = Math.floor(10 + (charac.stats.con - 10) / 2);
    charac.hpLeft = Math.floor(10 + (charac.stats.con - 10) / 2);
    database.characters.addCharacter(charac);
    return charac;
  }
};
