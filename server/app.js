// import db
require("./db/config");

const express = require("express"),
  morgan = require("morgan"),
  app = express(),
  openUserRoutes = require("./routes/open/users"),
  openPostRoutes = require("./routes/open/posts"),
  secureRoutes = require("./routes/secure/newPost"),
  cors = require("cors"),
  path = require("path"),
  authorize = require("./middleware/authorize");

app.use(cors());

// parse incoming JSON into objects
app.use(express.json());

// log all requests
app.use(morgan("dev"));

// open routes
app.use("/api/users", openUserRoutes);
app.use("/api/posts", openPostRoutes);

// authenticated routes
app.use("/api/posts", authorize, secureRoutes);

if (process.env.NODE_ENV === "production") {
  // serve any static files
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
}

if (process.env.NODE_ENV === "production") {
  // handle react routing, return all requests to react app
  app.get("*", (request, response) => {
    this.response.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}

module.exports = app;
