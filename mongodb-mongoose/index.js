import mongoose, { Schema, model } from "mongoose";

const uri = "mongodb://localhost:27017/studentsDb";

try {
  await mongoose.connect(uri);
  console.log("Connected to db successfully");
} catch (error) {
  console.error("Cannot connect to DB!");
}

// Setup mongoose schema
const studentSchema = new Schema({
  name: String,
  age: Number,
});

// Create mongoose model
const Student = model("Student", studentSchema);
