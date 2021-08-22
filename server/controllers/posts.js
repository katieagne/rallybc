const Post = require("../db/models/post");

// create a post
exports.createPost = async (req, res) => {
  const { title, content, likes } = req.body;
  try {
    const post = await new Post({
      title,
      content,
      likes,
      postedBy: req.decoded.id,
    });
    post.save();
    console.log(post);
    res.status(201).json(post);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// edit/update a post
exports.updatePost = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "content"];
  const isValidOperation = update.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation)
    return res.status(400).send({ error: "invalid updates" });

  try {
    const post = await Post.findOne({
      _id: req.params._id,
      postedBy: req.user._id,
    });
    if (!post) return res.status(404).json({ error: "post not found" });
    updates.forEach((update) => (post[update] = req.body[update]));
    await post.save();
    res.json(post);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
