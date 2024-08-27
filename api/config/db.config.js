const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("connected to Mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose connection closed");
    process.exit(0);
  });
});
