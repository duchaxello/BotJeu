const colorCharacter = 3447003;
const colorGod = 0xc90000;

module.exports = {
  character: function(object) {
    const embed = {
      embed: {
        color: colorCharacter,
        author: {
          name: object.name,
          // icon_url: object.avatar,
        },
        fields: [
          {
             name: 'PV',
             value: object.pv,
          },
          {
            name: 'Stats',
            value : 'FOR : ' + object.stats.for +
              '\nDEX : ' + object.stats.dex +
              '\nCON : ' + object.stats.con +
              '\nSAG : ' + object.stats.sag +
              '\nCHA : ' + object.stats.cha,
          },
        ],

      },
    };
    return embed;
  },

  god: function(object) {
    const embed = {
      embed: {
        color: colorGod,
        author: {
          name: object.name,
          // icon_url: object.avatar,
        },
        fields: [
          {
             name: 'PV',
             value: object.pv,
          },
          {
            name: 'Stats',
            value: 'FOR : ' + object.stats.for +
              '\nDEX : ' + object.stats.dex +
              '\nCON : ' + object.stats.con +
              '\nSAG : ' + object.stats.sag +
              '\nCHA : ' + object.stats.cha,
          },
        ],

      },
    };
    return embed;
  },
};
