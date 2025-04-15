const mongoose = require("mongoose"); // Import mongoose library for MongoDB connection
const Schema = mongoose.Schema; // Create a Schema object for defining document structure

// Define user schema (structure of the user document)
const userSchema = new Schema({
  fullName: {
    type: String, // Data type is String
    required: true, // fullName is mandatory
  },
  email: {
    type: String, // Data type is String
    required: true, // Email is mandatory
    unique: true, // Email should be unique (no duplicates)
  },
  password: {
    type: String, // Data type is String
    required: true, // Password is mandatory
  },
  createdOn: {
    type: Date, // Data type is Date
    default: Date.now, // Automatically set to current date and time when created
  },
});

// Create a model based on the schema
// "User" is the model name, userSchema defines the structure
module.exports = mongoose.model("User", userSchema);
