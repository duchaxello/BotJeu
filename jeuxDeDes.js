module.exports = {


  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
  },


  lancerDes: function(content) {
    /* TODO : Vieille fonction à retapper... */
    let list = content.split("d");
    var retour = "";

    if (list[0] === "" && Number.isInteger(parseInt(list[1]))) {
      retour = this.getRandomInt(parseInt(list[1])) + "";

    } else if (Number.isInteger(parseInt(list[0])) && Number.isInteger(parseInt(list[1]))) {

      var total = 0;
      var tmp = 0;

      for (var i = 0; i < parseInt(list[0]); i++) {
        tmp = this.getRandomInt(parseInt(list[1]));
        total += tmp;
        retour += tmp + ", ";
      }
      retour += "--> " + total;

    } else {
      throw "ERROR during the command 'jet' : Wrong parameters";
    }

    return retour;
  },

  lancerStatPathfinder() {
    /* Pour roll les stats on lance 4d6 et on enlève le minimum tiré. */
    var nbDés = 4;
    var tailleDés = 6;
    var total = 0;
    var tmp = 0;
    var min = 6;

    for (var i = 0; i < nbDés; i++) {
      tmp = this.getRandomInt(parseInt(tailleDés));
      total += tmp;
      if (min > tmp) {
        min = tmp;
      }
    }
    return total-min;
  },
}
