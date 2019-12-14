module.exports = {
  CONNECTION_URL: process.env.MONGODB_CONNECTION_URL || "mongodb://user:user@localhost:27017/weblog",
  DATABSE: process.env.MONGODB_DATABSE || "weblog",
  OPTIONS: {
    family: 4
  }
};
