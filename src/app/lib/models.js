import mongoose from "mongoose";

const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  upiId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const courseSchema = new Schema({
  courseid: {
    type: Number,
  },
  courses_refer: {
    type: String,
    default: "",
  },
});
const SubscriptionSchema = new Schema({
  Subscriptionid: {
    type: Number,
  },
  Subscription_refer: {
    type: String,
    default: "",
  },
});
const SubcourseSchema = new Schema({
  Subcourseid: {
    type: Number,
  },
  Subcourse_refer: {
    type: String,
    default: "",
  },
});

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
    course: { type: [courseSchema], default: [] },
    Subscription: { type: [SubscriptionSchema], default: [] },
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
    current_balance: {
      type: Number,
      default: 0,
    },
    total_balance: {
      type: Number,
      default: 0,
    },
    Transaction: { type: [transactionSchema], default: [] },
    Subcourse: { type: [SubcourseSchema], default: [] }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
