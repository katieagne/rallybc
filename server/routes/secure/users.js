const router = require("express").Router(),
  User = require("../../db/models/user"),
  jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please log in :)");
  }
  // getting token
  const authToken = req.headers.authorization.split(" ")[1];

  // verifying token
  jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid auth token.");
    }

    req.decoded = decoded;
  });

  const user = await User.findOne({ email: req.email });
  res.status(201).json(user);
});

module.exports = router;
