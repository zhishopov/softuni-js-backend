import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/studentsDb";

try {
  await mongoose.connect(uri);
  console.log("Connected to db successfully");
} catch (error) {
  console.error("Cannot connect to DB!");
}
