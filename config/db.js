const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb://test:a12345@ds257698.mlab.com:57698/node-auth";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
