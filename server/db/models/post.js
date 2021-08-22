const mongoose = require("mongoose"),
  validator = require("validator"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

// post schema
const postSchema = new mongoose.Schema(
  {
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
    likes: {
      type: Number,
    },
    isGeneral: { type: Boolean },
    replies: [
      {
        text: String,
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

// postSchema.methods.toJSON = function () {
//   const post = this;
//   const postObject = post.toObject();
//   if (postObject.dueDate) {
//     postObject.dueDate = moment(postObject.dueDate).format('YYYY-MM-DD');
//   }
//   return postObject;
// };

const Post = mongoose.model("Post", postSchema);

module.exports = Post;