const router = require("express").Router(),
  authorize = require("../../middleware/authorize"),
  User = require("../../db/models/user"),
  Post = require("../../db/models/post"),
  jwt = require("jsonwebtoken"),
  { createPost } = require("../../controllers/posts");

// get current user
router.get("/", async (req, res) => {
  // User.where({ _id: req.decoded.id });
  // TODO not sure if I need this?
  // .then((user) => {
  //   const currentUser = { ...user.attributes, password: null };
  //   Post.where({ user_id: currentUser.id })
  //     .fetchAll()
  //     .then((posts) => {
  //       res.status(200).json({ currentUser, posts });
  //     });
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message });
  // });
  const user = await User.findOne({ email: req.decoded.email });

  res.status(201).json(user);
});

router.post("/post", createPost);
module.exports = router;
