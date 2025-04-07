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

// Query all data from db
const students = await Student.find();
// console.log(students);

// Query filtered data from db
const filtered = await Student.find({ age: 25 });
console.log(filtered);

// Insert data into db #1
// const newStudent = new Student({ name: "Ivo", age: 26 });
// await newStudent.save();

// const students1 = await Student.find();
// console.log(students1);

// Insert data into db #2
const createdStudent = await Student.create({
  name: "Zhivko",
  age: 29,
});
