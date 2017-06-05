const Mongodb = require('./Mongodb.js');
const dataArr = [{ 'name': '1区-sb兴', 'age': 60 }, { 'name': '2区-sb兴', 'age': 50 }, { 'name': '3区-sb兴', 'age': 40 }, { 'name': '4区-sb兴', 'age': 30 }];

const mongo = new Mongodb({
  db: '汀沙街大瓜兴',
  collection: 'SB兴'
});

mongo.connect(function (db) {
  mongo.insert(db,dataArr);
});

mongo.connect(function (db) {
  mongo.updata(db, { 'name': '1区-sb兴' },{$set:{'sex':'女'}});
});

// mongo.connect(function (db) {
//   mongo.delete(db, { 'name': '1区-sb兴' });
// });

mongo.connect(function (db) {
  mongo.find(db, function (result) {
    console.log(result);
  });
});
