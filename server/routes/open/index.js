const router = require("express").Router(),
  { createUser, loginUser, getAllUsers } = require("../../controllers/users"),
  { getAllPosts } = require("../../controllers/posts");

// user
router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);

// posts
router.get("/posts/:category", getAllPosts);

module.exports = router;
