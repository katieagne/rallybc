const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(`Error: ${error}`);
}

// mongoose.connect is how we connect to the mongodb url
// first argument is connection string, second arugment is configuation options
