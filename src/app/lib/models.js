import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
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
    bio: {
      type: String,
      default: "Hi i am a regular user of Gurukul skills",
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
        courseid:{ type:Number,default:null},
        courses_refer: {type:String,default:""},
      },
    ],
    Subscription: [
      {
        Subscriptionid:{ type: Number, default:null},
        sub_refer: {type:String,default:""},
      },
    ],
    social: [
      {
        twitter: { type: String, default: "" },
        facebook: { type: String, default: "" },
        instagram: { type: String, default: "" },
        linkedIn: { type: String, default: "" },
      },
    ],
    refers: {
      type: Number,
      default: 0,
    },
    refercode: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
