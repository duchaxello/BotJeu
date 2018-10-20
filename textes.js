var fr = {};

/* Commandes d'ordre général. */
fr.ready = 'Je suis prêt, réveillons les gobelins de ce monde et conquérons le monde ensemble MOUHAHAHA !';

fr.wrongMentionForAvatar = 'Je le connais pas lui.';
fr.selfAvatarDisplay = 'Voila ta petite tête mon bonhomme : ';
fr.otherAvatarDisplay = 'Il doit ressembler à quelquechose comme ça : ';

fr.errorCommand = 'Ah je crois que j\'ai raté cette commande, il doit y avoir une erreur...';

fr.reply = function({ author } = { author: { username: 'mécréant' } }) {
  return 'Tu te prends pour qui ' + author.username + ' ?';
};

module.exports = { fr };
