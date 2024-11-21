import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String },
    resumeOriginal: { type: string },
    profilePhoto: { type: String, default: "" },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
  },
  role: {
    type: String,
    enum: ["applicant", "recruiter"],
    required: true,
  },
},{timestamps:true});

export const User = mongoose.model('User', userSchema);

