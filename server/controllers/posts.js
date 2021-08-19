const Post = require("../db/models/post");

exports.createPost = async (req, res) => {
  const { title, postedBy, content, date, likes } = req.body;
  try {
    const post = new Post({
      title,
      postedBy,
      content,
      date,
      likes,
    });
    res.status(201).json(post);
  } catch (e) {
    res.status.status(400).json({ error: e.toString() });
  }
};
