var { CONNECTION_URL, DATABASE, OPTIONS } = require("../../config/mongodb.config.js");
var MongoClient = require("mongodb").MongoClient;

var insertPosts = function (db) {
  return Promise.all([
    db.collection("posts").insertMany([{
      url: "/2017/05/hello-nodejs.html",
      published: new Date(2017, 4, 2),
      updated: new Date(20117, 4, 2),
      title: "ようこそ　Node.jsの世界へ",
      content: "Node.jsは面白い",
      keyword: ["Node.js"],
      authors: ["Iida Takayuki"]
    },{
      url: "/2017/05/hello-nodejs.html",
      published: new Date(2018, 4, 2),
      updated: new Date(20118, 4, 2),
      title: "ようこそ　Node.jsの世界へeeeeeeee",
      content: "Node.jsは面白いsrrrrrr",
      keyword: ["Node.js"],
      authors: ["Iida Takayuki"]
    },{
      url: "/2017/05/helldd-nodejs.html",
      published: new Date(2019, 4, 2),
      updated: new Date(20119, 4, 2),
      title: "ようこそ　Node.jsの世界へddddddddddd",
      content: "Node.jsは面白いsssss",
      keyword: ["Node.js"],
      authors: ["Iida Takayuki"]
    }]),
    db.collection("posts").createIndex({url:1}, {unique: true, backgroud: true})
  ]);
};

var insertUsers = function (db) {
  return Promise.all([
    db.collection("users").insertOne({
      email: "takayuki@takayuki.com",
      name: "Takayuki Iida",
      password: "takayuki",
      role: "owner"
    }),
  ]);
};

var insertPrivileges = function (db) {
  return Promise.all([
    db.collection("privileges").insertMany([
      {role: "default", permissions: ["read"] },
      {role: "owner", permissions: ["readWrite"]}
    ]),
    db.collection("privileges")
      .createIndex({role: 1}, {unique: true, background: true})
  ]);
};

MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
  // console.log(client);
  var db = client.db(DATABASE);
  Promise.all([
    insertPosts(db),
    insertUsers(db),
    insertPrivileges(db)
  ]).catch((error) => {
    console.log(error);
  }).then(() => {
    client.close();
  });
});
