var req = require('tiny_request');
var Crawler = require("js-crawler");
const cheerio = require('cheerio');

/*
  Le code de la fonction getRandomGoblinName a été récupéré du site
  fantasynamegenerators.com, tout le mérite revient à la personne qui l'a posté
  sur ce site. Je me permets de récupérer ce code parce que
  j'ai besoin de cette petite fonctionnalité pour ce projet
  qui n'a pas pour vocation de générer des profits.

  Le script original :
  https://www.fantasynamegenerators.com/scripts/goblinNormal.js
*/

var nm1 = ["","","","","","","","b","c","d","f","g","h","j","k","l","p","r","t","v","w","x","z","br","bl","cr","cl","ch","dr","fr","gr","gl","gn","kr","kl","pr","pl","str","st","sr","sl","tr","vr","wr","zr"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","ia","io","ee","aa","ui","ie","ea","oi"];
var nm3 = ["b","d","g","h","k","l","m","n","r","s","t","v","z","b","d","g","h","k","l","m","n","r","s","t","v","z","b","d","g","h","k","l","m","n","r","s","t","v","z","b","d","g","h","k","l","m","n","r","s","t","v","z","bb","bd","bh","bl","bk","bn","br","bs","bt","bz","db","dd","df","dh","dl","dn","dr","ds","dv","dz","","gg","gb","gd","gh","gk","gl","gm","gn","gr","gs","gt","gz","hd","hb","hk","hn","hz","kl","kn","kz","kv","kk","lb","ld","lg","lk","ll","lr","ls","lt","lv","lz","mr","mv","mz","mt","nr","nv","nz","nt","rb","rd","rg","rk","rl","rm","rn","rr","rs","rt","rv","rz","sb","sd","sh","sk","sm","sn","sr","str","st","sv","sz","ss","tb","tl","tm","tn","tr","tv","tz","tt","vl","vn","vr","vz","zb","zd","zg","zl","zm","zn","zt"];
var nm4 = ["c","g","k","l","q","r","t","x","z","nk","ld","rd","s","sz","zz","ng","kz","lb","rm","sb","bs","ts","cs","ct","gs","gz","kt","kx","lk","lx","rk","rt","rd","rx"];
var nm5 = ["","","","","","","","b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","bh","br","bl","cr","cl","ch","fr","fl","gr","gl","gn","kh","kl","ph","pr","sh","st","sr","sl","sw","th","thr","tr","vr","wr"];
var nm6 = ["b","f","g","h","k","l","m","n","p","r","s","t","v","b","f","g","h","k","l","m","n","p","r","s","t","v","b","f","g","h","k","l","m","n","p","r","s","t","v","b","f","g","h","k","l","m","n","p","r","s","t","v","bb","bd","bh","bl","bk","bn","br","bs","bt","bz","fb","fl","fm","fn","fs","ft","gg","gb","gd","gh","gk","gl","gm","gn","gr","gs","gt","gz","hd","hb","hk","hn","hz","kl","kn","kz","kv","kk","lb","ld","lg","lk","ll","lr","ls","lt","lv","lz","mr","mv","mz","mt","nr","nv","nz","nt","ph","pf","pl","pn","pm","pr","ps","pt","pv","rb","rd","rg","rk","rl","rm","rn","rr","rs","rt","rv","rz","sb","sd","sh","sk","sm","sn","sr","str","st","sv","sz","ss","tb","tl","tm","tn","tr","tv","tz","tt","vl","vn","vr","vz"];
var nm7 = ["h","f","g","l","n","q","s","x","z","ls","nk","zz","ld","sh","sz","ss","gs","sx","lx","hx","th","rx","rt","ft","fs","fz","lm","lk","lt","ng","nx","ns","nq"];
var nm8 = ["e","i","ee","ia","ea","a","ai","","","","","","","","","","","","",""];


module.exports = {


  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
  },


  lancerDes: function(content) {
    /* TODO : Vieille fonction à retapper... */
    let list = content.split('d');
    var output = '';

    if (list[0] === '' && Number.isInteger(parseInt(list[1]))) {
      output = this.getRandomInt(parseInt(list[1])) + '';

    } else if (Number.isInteger(parseInt(list[0])) && Number.isInteger(parseInt(list[1]))) {

      var total = 0;
      var tmp = 0;

      for (var i = 0; i < parseInt(list[0]); i++) {
        tmp = this.getRandomInt(parseInt(list[1]));
        total += tmp;
        output += tmp + ', ';
      }
      output += '--> ' + total;

    } else {
      throw 'ERROR during the command _jet_ : Wrong parameters';
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
    return total - min;
  },

  getRandomGoblinName() {
    let name;

    const rnd2 = Math.floor(Math.random() * nm2.length);
    const rnd2b = Math.floor(Math.random() * nm2.length);
    if (this.getRandomInt(2) === 1) {
      console.log("1");
      const rnd5 = Math.floor(Math.random() * nm5.length);
      const rnd7 = Math.floor(Math.random() * nm7.length);
      const rnd8 = Math.floor(Math.random() * nm8.length);
      if(this.getRandomInt(10) < 5) {
      console.log("2");
        name = nm5[rnd5] + nm2[rnd2] + nm7[rnd7] + nm8[rnd8];
      } else {
        console.log("3");
        const rnd6 = Math.floor(Math.random() * nm6.length);
        name = nm5[rnd5] + nm2[rnd2] + nm6[rnd6] + nm2[rnd2b] + nm7[rnd7] + nm8[rnd8];
      }
    } else {
      console.log("4");
      const rnd5 = Math.floor(Math.random() * nm1.length);
      const rnd7 = Math.floor(Math.random() * nm4.length);
      if (this.getRandomInt(10) < 5) {
        console.log("5");
        name = nm1[rnd5] + nm2[rnd2] + nm4[rnd7];
      } else {
        console.log("6");
        const rnd3 = Math.floor(Math.random() * nm3.length);
        name = nm1[rnd5] + nm2[rnd2] + nm3[rnd3] + nm2[rnd2b] + nm4[rnd7];
      }
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  },

  hit() {
    return this.getRandomInt(20);
  },

  damage(characters) {
    return this.getRandomInt(4) + Math.floor((characters.stats.for - 10) / 2);
  }

};
