const User = require("../db/models/user"),
  jwt = require("jsonwebtoken");

// create a user
exports.createUser = async (req, res) => {
  const { email, name, password, postalCode } = req.body;
  try {
    const user = await new User({
      email,
      name,
      password,
      postalCode,
    }).save();
    console.log(user);
    const userToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    console.log(userToken);
    res.status(201).json({ user: user, userToken });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// log in a user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    const userToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    console.log(userToken);
    res.status(201).json({ user, userToken });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// get current user
// exports.getCurrentUser = async (req, res) => res.json(req.user);
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.decoded.email });
    console.log(req.decoded.email);
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
