import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 25,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      default: "Male",
    },
    dob: {
      type: Date,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    confirm_password: {
      type: String,
    },
    state: {
      type: String,
    },
    course: [
      {
        courseid: String,
        courses_refer: String,
      },
    ],
    Subscription: [
      {
        Subscriptionid: String,
        sub_refer: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
