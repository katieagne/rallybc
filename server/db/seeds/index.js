if (process.env.NODE_ENV !== "production") require("dotenv").config();

require("../config/");

const { fake } = require("faker");
const Post = require("../models/post"),
  User = require("../models/user"),
  faker = require("faker"),
  mongoose = require("mongoose");

// reset database
const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
  await Post.countDocuments({}, function (err, count) {
    console.log("Number of posts:", count);
  });

  const userIdArray = [];
  const postIdArray = [];

  for (let i = 0; i < 100; i++) {
    const user = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password(),
      postalCode: "V2B 1P4",
    });
    await user.generateAuthToken();
    userIdArray.push(user._id);
  }

  for (let i = 0; i < 100; i++) {
    const post = new Post({
      title: faker.name.title(),
      content: faker.lorem.paragraph(),
      likes: 0,
      isGeneral: Boolean(Math.round(Math.random())),
      postedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      replies: [
        {
          text: faker.lorem.paragraph(),
          postedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
        },
        {
          text: faker.lorem.paragraph(),
          postedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
        },
        {
          text: faker.lorem.paragraph(),
          postedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
        },
      ],
    });
    await post.save();
    postIdArray.push(post._id);
  }
  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
  await Post.countDocuments({}, function (err, count) {
    console.log("Number of posts:", count);
  });
};

dbReset();
