const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: [true, "Avatar field is required"],
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "Invalid URL",
    }
  }
});

module.exports = mongoose.model('user', userSchema);
