const mongoose = require("mongoose"),
  validator = require("validator"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

// post schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  likes: {
    type: Number,
  },
  replies: [
    {
      text: String,
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

postSchema.methods.toJSON = function () {
  const post = this;
  const postObject = post.toObject();
  return postObject;
};

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
