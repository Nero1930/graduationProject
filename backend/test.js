var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    db.db("runoob").collection('site').insert({
      title: 'Mongodb',
      description: 'MongoDB 是一个 Nosql 数据库',
      by: '菜鸟教程',
      url: 'http://www.runoob.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
    }, function (err, res) {
      if(err) console.log(err);
      console.dir(res);
    })
});
