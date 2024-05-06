//working but with defult
import { User } from "../../lib/models";
import { connectToDB } from "../../lib/util";
import { NextResponse } from "next/server";

const defaultTransaction = {
  email: "arpitthekumar37@gmail.com",
  subscriptionid: 2,
};
export async function POST(req, res) {
  // Ensure MongoDB connection
  await connectToDB();

  if (req.method === "POST") {
    try {
      // Extract necessary data from the request body
      const { email, subscriptionid } = req.body;
      // const { email, subscriptionid } = defaultTransaction;

      console.log(email,subscriptionid);
      // Ensure subscriptionid is a number
      const subscriptionIdNumber = parseInt(subscriptionid);
console.log(subscriptionIdNumber);
      // Generate the subscriptionRefer here (for demonstration purposes, generating a random string)
      const subscriptionsRefer = generatesubscriptionRefer();
console.log(subscriptionsRefer);
      // Fetch the user from the database based on the email
      const user = await User.findOne({ email});

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Logic to determine sub course ids based on subscription id
      // let subCourseIds = [];
      // if (subscriptionIdNumber === 1) {
      //   subCourseIds = [1];
      // } else if (subscriptionIdNumber === 2) {
      //   user.subCourse.push({ Subcourseid: subCourseIds, Subcourse_refer: subscriptionRefer });
      //   console.log("goood")
      //   subCourseIds = [2, 3];
      //   user.subCourse.push({ Subcourseid: subCourseIds, Subcourse_refer: subscriptionRefer });
      // } else if (subscriptionIdNumber === 3) {
      //   subCourseIds = [4, 5, 6];
      //   user.subCourse.push({ Subcourseid: subCourseIds, Subcourse_refer: subscriptionRefer });
      // }

      // Add subscription and sub course ids to the user
      user.Subscription.push({ Subscriptionid: subscriptionIdNumber , Subscription_refer: subscriptionsRefer });
      console.log(subscriptionid,subscriptionsRefer);
      // subCourseIds.forEach(subCourseId => {
      // });

      // Save the updated user document
      await user.save();

      // Return a success response
      return NextResponse.json({ message: "subscription added successfully" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}

// Function to generate a random alphanumeric string for subscriptionRefer
function generatesubscriptionRefer() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let subscriptionRefer = "";
  for (let i = 0; i < 6; i++) {
    subscriptionRefer += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return subscriptionRefer;
}
