const Discord = require('discord.js');
const { fr } = require('./textes.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(fr.ready);
});


client.on('message', message => {
  if (!message.content.startsWith(config.prefix)) return;

  const withoutPrefix = message.content.slice(config.prefix.length);
  const split = withoutPrefix.split(/ +/);
  const command = split[0];
  const args = split.slice(1);

  if (command === 'avatar') {
    if (args[0]) {
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
      }

      return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL}`);
    }

    return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL}`);
  } else if (command === 'test') {
    if (args[0]) {
      message.channel.send(fr.reply(message));
    }
  }
});


function getUserFromMention(mention) {
  const matches = mention.match(/^<@!?(\d+)>$/);
  const id = matches[1];
  return client.users.get(id);
}

client.login(config.token);
