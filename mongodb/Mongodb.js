// mongodb操作的客户端
const MongoClient = require('mongodb').MongoClient;

function Mongodb(option) {
  this._init(option)
}

Mongodb.prototype = {
  constructor: Mongodb,
  _init: (option) => {
    this.collection = option.collection;
    this.url = 'mongodb://localhost:27017/' + option.db + '';
  },
  connect: (callback) => {
    // const self = this;
    MongoClient.connect(this.url, (err, db) => {
      if (!err) {
        console.log('连接成功');
        if (callback) {
          callback(db);
        }
      } else {
        console.log('连接失败');
      }
    });
  },
  insert: (db, dataArr) => {
    dataArr = dataArr || [];
    const table = db.collection(this.collection);
    table.insertMany(dataArr, (err, result) => {
      if (!err) {
        console.log(result.result);
      } else {
        console.log(err);
      }
      db.close();
    })
  },
  updata: (db, obj1, obj2) => {
    const table = db.collection(this.collection);
    table.updateMany(obj1, obj2, (err, result) => {
      if (!err) {
        console.log(result.result);
      }
      db.close();
    })
  },
  delete: (db, obj) => {
    obj = obj || {};
    const table = db.collection(this.collection);
    table.deleteMany(obj, (err, result) => {
      if (!err) {
        console.log(result.result);
      }
      db.close();
    });
  },
  find: (db, callback, obj) => {
    obj = obj || {};
    const table = db.collection(this.collection);
    table.find(obj).toArray((err, result) => {
      if (!err) {
        if (callback) {
          callback(result);
        }
      }
      db.close();
    });
  }
}

module.exports = Mongodb;