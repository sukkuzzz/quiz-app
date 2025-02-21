import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo Db Connection Successful");
});

connection.on("error", (err) => {
  console.log("Mongo Db Connection Failed");
});

export default connection;
// import mongoose from "mongoose";

// const mongoURI = process.env.MONGO_URL; // Ensure this is defined

// if (!mongoURI) {
//   console.error(
//     "❌ MongoDB URI is undefined. Check your environment variables."
//   );
//   process.exit(1); // Exit process if no URI is found
// }

// const connectioon = mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// export default connection;
