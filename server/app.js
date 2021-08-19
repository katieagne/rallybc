// import db
require("./db/config");

const express = require("express"),
  morgan = require("morgan"),
  app = express(),
  cookieParser = require("cookie-parser"),
  openRoutes = require("./routes/open"),
  secureRoutes = require("./routes/secure/users"),
  cors = require("cors"),
  path = require("path");

app.use(cors());

// parse incoming JSON into objects
app.use(express.json());

// log all requests
app.use(morgan("dev"));

// unauthenticated routes
app.use("/users", openRoutes);

// authenticated routes
app.use("/current", secureRoutes);

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
