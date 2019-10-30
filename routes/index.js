var router = require("express").Router();

router.get("/", (req, res) => {
  throw new Error("sample");
});

module.exports = router;
