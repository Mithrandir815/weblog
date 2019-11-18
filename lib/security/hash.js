var {PASSWORD_SALT, PASSWORD_STRTCH} = require("../../config/app.config.js").security;
var crypto = require("crypto");

var digest = function (text) {
  var hash;

  text += PASSWORD_SALT;
  for (var i = PASSWORD_STRTCH; i--;) {
    hash = crypto.createHash("256");
    hash.update(text);
    text = hash.digest("hex");
  }

};
module.exports = {
  digest
};
