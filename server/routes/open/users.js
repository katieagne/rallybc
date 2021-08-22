const router = require("express").Router(),
  { createUser, loginUser, getAllUsers } = require("../../controllers/users");

// user
router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);

module.exports = router;
