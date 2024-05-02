const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muzi:muzi123@cluster0.quilybs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connect;
