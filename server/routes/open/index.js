const router = require("express").Router(),
  { createUser, loginUser } = require("../../controllers/users"),
  { createPost } = require("../../controllers/posts");

router.post("/", createUser);
router.post("/login", loginUser);
router.post("/post", createPost);

module.exports = router;
