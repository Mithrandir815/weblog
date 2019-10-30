var logger = require("./logger.js").system;

module.exports = function () {
  return function (err, req, res, next) {
    logger.error(err.message);
    next(err);
  };
};
