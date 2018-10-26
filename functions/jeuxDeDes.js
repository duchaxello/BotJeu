module.exports = {


  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
  },


  lancerDes: function(content) {
    /* TODO : Vieille fonction à retapper... */
    let list = content.split("d");
    var output = "";

    if (list[0] === "" && Number.isInteger(parseInt(list[1]))) {
      output = this.getRandomInt(parseInt(list[1])) + "";

    } else if (Number.isInteger(parseInt(list[0])) && Number.isInteger(parseInt(list[1]))) {

      var total = 0;
      var tmp = 0;

      for (var i = 0; i < parseInt(list[0]); i++) {
        tmp = this.getRandomInt(parseInt(list[1]));
        total += tmp;
        output += tmp + ", ";
      }
      output += "--> " + total;

    } else {
      throw "ERROR during the command 'jet' : Wrong parameters";
    }

    return output;
  },

  rollStatPathfinder() {
    var nbDices = 4;
    var sizeDice = 6;
    var total = 0;
    var tmp = 0;
    var min = 6;

    for (var i = 0; i < nbDices; i++) {
      tmp = this.getRandomInt(parseInt(sizeDice));
      total += tmp;
      if (min > tmp) {
        min = tmp;
      }
    }
    return total-min;
  },
}
