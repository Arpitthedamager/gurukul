import mongoose from "mongoose";

const { Schema } = mongoose;

// // Define course schema
// const courseSchema = new Schema({
//   courseId: {
//     type: Number,
//     unique: true
//   },
//   title: String,
//   description: String,
//   price: Number,
//   originalPrice: Number,
//   includes: [{
//     label: String,
//     icon: String
//   }],
//   overviewDescription: String,
//   learnItems: [String],
//   otherBenefits: [String],
//   level: {
//     type: String,
//     enum: ["Bronze", "Silver", "Gold"] // Assuming these are the possible levels
//   },
//   oneLineDescription: String // New field for one-line description
// });

// Define user schema
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
    // course: [
    //   {
    //     courseid: String,
    //     courses_refer: String,
    //   },
    // ],
    // Subscription: [
    //   {
    //     Subscriptionid: String,
    //     sub_refer: String,
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

// // Define subscription schema
// const subscriptionSchema = new Schema({
//   name: String,
//   imageSrc: String,
//   price: String,
//   description: String
// });

// Create the models
export const User = mongoose.models.User || mongoose.model("User", userSchema);
// const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
// const Subscription = mongoose.models.Subscription || mongoose.model("Subscription", subscriptionSchema);

