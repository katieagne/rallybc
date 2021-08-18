const User = require("../db/models/user");

exports.createUser = async (req, res) => {
  const { email, name, password, postalCode } = req.body;
  try {
    const user = new User({
      email,
      name,
      password,
      postalCode,
    });
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
