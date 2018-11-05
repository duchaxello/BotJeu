var fr = {};

/* Commandes d'ordre général. */
fr.ready = 'Je suis prêt, réveillons les gobelins de ce monde et conquérons le monde ensemble MOUHAHAHA ! \n\n\n';

/* Commande 'avatar' */
fr.wrongMentionForAvatar = 'Je le connais pas lui.';
fr.selfAvatarDisplay = 'Voila ta petite tête mon bonhomme : ';
fr.otherAvatarDisplay = 'Il doit ressembler à quelquechose comme ça : ';

/* Commande 'welcome' */
fr.wrongMentionForWelcome = ' ? C\'est qui lui ?';
fr.welcomeOtherMember = function(user) {
  return 'Bienvenue, bienvenue mon cher ami ' + user + ', bienvenue :]';
}
fr.welcomeEveryone = ' Bienvenue à tous dans la grotte de la Crasse Oubliée !';

/* Commande 'admire' */
fr.wrongMentionForAdmiration = "Ce misérable ne mérite aucune admiration.";

/* Textes pour la création de personnages */
fr.chooseToCreateCharacter = 'Je vois que tu veux te réincarner, bien bien bien.' +
  ' Mais tu sais qu\'en faisant ça tu vas perdre tout ce que tu avais ' +
  'jusqu\'à maintenant ? \nTon nom, tes muscles soyeux, et même ton visage, ' +
  'plus rien ne sera pareil si je m\'occupe de ton cas. ' +
  '\nMême moi je ne peux pas savoir à quoi tu ressembleras après. ' +
  '\n\nEs-tu SUR de vouloir faire cette transformation ? Dis moi *haha* si tu veux commencer.';
fr.chosenToCreate = 'Bon c\'est parti.';
fr.chosenNotToCreate = 'C\'est certainement plus sage, mais la prochaine fois ne me fais pas perdre mon temps.';


/* Commandes générales */
fr.noArguments = 'Il faut donner des arguments quand on fait une requête de ce genre. ';
fr.properUsage = '\nCette commande doit être lancée selon le schéma : \n';
fr.errorCommand = 'Ah je crois que j\'ai raté cette commande, il doit y avoir une erreur... ';

fr.reply = function({ author } = { author: { username: 'mécréant' } }) {
  return 'Tu te prends pour qui ' + author.username + ' ?';
};

module.exports = { fr };
