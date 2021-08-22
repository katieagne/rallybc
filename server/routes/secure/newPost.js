const router = require("express").Router(),
  authorize = require("../../middleware/authorize"),
  User = require("../../db/models/user"),
  Post = require("../../db/models/post"),
  jwt = require("jsonwebtoken"),
  { createPost } = require("../../controllers/posts"),
  { getCurrentUser } = require("../../controllers/users");

// get current user
// router.get("/user", async (req, res) => {
//   const user = await User.findOne({ email: req.decoded.email });
//   res.status(201).json(user);
// });
router.get("/user", getCurrentUser);

// create new post
router.post("/", createPost);

module.exports = router;
