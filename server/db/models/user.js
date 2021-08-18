const mongoose = require("mongoose"),
  validator = require("validator"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

// user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can't be password");
      }
      if (value.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }
    },
  },
  postalCode: {
    type: String,
    trim: true,
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// TODO ask about this method, what is it doing?
// instance method
// the return value of this method is used in calls to
// JSON.stringify(doc)
//  @return {name, email, postal code, admin}

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// instance method to generate a user token
// @return {token}
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// static method to find user by email and compare passwords
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Unable to log in");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Unable to log in");
  return user;
};

// middleware to hash the password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password"))
    user.password = await bcrypt.hash(user.password, 8);

  next();
});

// user model!
const User = mongoose.model("User", userSchema);

module.exports = User;
