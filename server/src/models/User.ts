import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    fullName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "STUDENT", "TEACHER"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
    },
    cpf: {
      type: String,
      required: true,
      unique: true,
      minlength: 11,
      maxlength: 14,
    },

    deletedAt: {
      type: Date,
      required: false,
      default: null,
    },
    userCount: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true, autoIndex: true }
);

const User = mongoose.model("User", userSchema);
export default User;
