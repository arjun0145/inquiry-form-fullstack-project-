import mongoose from "mongoose";

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  batch: {
    type: String,
    required: true,
  },
});

export const UserSchema = mongoose.model("User", Schema);
