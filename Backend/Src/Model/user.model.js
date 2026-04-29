const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      unique: [true, "Username already exits"],
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      unique: [true, "email is already exit"],
      required: true,
      trim: true,
      lowercase: true,
    },

    bio: {
      type: String,
    },

    profile_image: {
      default:
        "https://ik.imagekit.io/1ris6t5in/everyday-basics-pi9W2dWDdak-unsplash.jpg?updatedAt=1776502136363",
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },

    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("usermodel", userSchema);

module.exports = userModel;
