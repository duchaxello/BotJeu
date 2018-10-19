var fr = {};

fr.ready = 'Je suis prêt, réveillons les gobelins de ce monde et conquérons le monde ensemble MOUHAHAHA !';
fr.reply = function({ author } = { author: { username: 'mécréant' } }) {
  return 'Tu te prends pour qui ' + author.username + ' ?';
};

module.exports = { fr };
