const Post = require("../db/models/post");

exports.createPost = async (req, res) => {
  const { title, content, likes } = req.body;
  try {
    const post = await new Post({
      title,
      content,
      likes,
      postedBy: req.decoded.id,
    });
    await post.save();
    res.status(201).json(post);
  } catch (e) {
    res.status.status(400).json({ error: e.toString() });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const category = req.params.category;
    if (category === "general") {
      const posts = await Post.find({ isGeneral: true });
      res.json(posts);
    }
    // const posts = await Post.find();
    // res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
