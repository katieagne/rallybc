const router = require("express").Router(),
  { createPost } = require("../../controllers/posts"),
  { getCurrentUser } = require("../../controllers/users");

router.get("/user", getCurrentUser);

// create new post
router.post("/", createPost);

module.exports = router;
