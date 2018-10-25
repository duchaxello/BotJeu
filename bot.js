const fs = require('fs');
const Discord = require('discord.js');
const { fr } = require('./textes/textes.js');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

/* Je ne sais pas si c'est une bonne pratique, mais j'en ai besoin pour
récupérer les infos des utilisateurs depuis d'autres fichiers. */
module.exports = { client };

/* Choix de la langue, français par défaut. */
const lang = fr;

/* Importation de toutes les commandes. */
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/* On les associe à notre client */
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

/* On affiche un message dans la console quand le bot est prêt. */
client.on('ready', () => {
    console.log(lang.ready);
});


/* Gestion des messages. */
client.on('message', message => {
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  /* Si c'est une commande inconnue, on l'ignore et sort de la fonction. */
  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  /* Si aucun argument n'est spécifié alors que la demande en a besoin,
  on affiche un message à l'utilisateur et on mmet fin à l'exécution. */
  if (command.args && !args.length) {
    let reply = lang.noArguments;
    if (command.usage) {
      reply += lang.properUsage + config.prefix + command.name + command.usage;
    }
    return message.reply({ embed: {
      color: 0xff0000,
      description: reply
    } });
  }

  /* Sinon on tente de l'exécuter. */
  try {
    command.execute(message, args, lang);
  }
  catch (error) {
    console.error(error);
    message.reply(lang.errorCommand);
  }
});

client.login(config.token);
