const router = require("express").Router(),
  { createUser, loginUser } = require("../../controllers/users"),
  { getAllPosts } = require("../../controllers/posts");

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/posts", getAllPosts);

module.exports = router;
