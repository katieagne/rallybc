const router = require("express").Router(),
  { getAllPosts } = require("../../controllers/posts");

// posts
// router.get("/posts/:category", getAllPosts);
router.get("/", getAllPosts);

module.exports = router;
