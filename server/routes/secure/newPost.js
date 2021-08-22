const router = require("express").Router(),
  { getCurrentUser } = require("../../controllers/users"),
  { createPost } = require("../../controllers/posts"),
  { getSpecificPost } = require("../../controllers/posts"),
  { getAllPosts } = require("../../controllers/posts"),
  { updatePost } = require("../../controllers/posts"),
  { deletePost } = require("../../controllers/posts");

// get current user
router.get("/user", getCurrentUser);

// create new post
router.post("/", createPost);

// get specific post
router.get("/:id", getSpecificPost);

// get all posts
router.get("/", getAllPosts);

// edit a post
router.patch("/:id", updatePost);

// delete a post
router.delete("/:id", deletePost);

module.exports = router;
