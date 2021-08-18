// import db
require("./db/config");

const express = require("express"),
  morgan = require("morgan"),
  app = express(),
  cookieParser = require("cookie-parser"),
  openRoutes = require("./routes/open"),
  path = require("path");

// parse incoming JSON into objects
app.use(express.json());

// log all requests
app.use(morgan("dev"));

// unauthenticated routes
app.use("/users", openRoutes);

app.use(cookieParser());

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
}

module.exports = app;
