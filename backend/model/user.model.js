import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    lastLogin: { type: Date, default: Date.now() },
    isVerified: { type: Boolean, default: false },
    resetPassWordToken: String,
    resetPassWordExpiresAt: Date,
    verificationToken: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);