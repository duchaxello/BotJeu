const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'gobelin';
const collecGods = 'gods';
const collecCharacters = 'characters';
const assert = require('assert');

let mongoClient = new Object();

MongoClient.connect(url, { useNewUrlParser: true }).then((mongoclient) => {
  mongoClient = mongoclient;
});

const database = module.exports = {
  /* Tout ce qui se ramène à la collection des dieux. */
  gods: {
    addMaglubiyet: function() {
      mongoClient.db(dbName).collection(collecGods).insertOne({
          name: 'Maglubiyet le Puissant',
          stats: {
            for: 99,
            dex: 99,
            con: 99,
            sag: 99,
            cha: 99,
          },
          pv: 1000,
          bot: true,
        });
    },

    findOne: function(query) {
      return mongoClient.db(dbName).collection(collecGods).findOne(query)
      .catch((err) => {
        throw err;
      });
      // .then((cursor) => {
      //   console.log(cursor);
      //   return cursor.toArray();
      // });
    },
  },
};
