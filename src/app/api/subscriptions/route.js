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
      const { email, subscriptionid } = await req.json();
      // const { email, subscriptionid } = defaultTransaction;

      console.log(email, subscriptionid);
      // Ensure subscriptionid is a number
      const subscriptionIdNumber = parseInt(subscriptionid);
      console.log(subscriptionIdNumber);

      // Fetch the user from the database based on the email
      const user = await User.findOne({ email });
      console.log(user)

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Generate a unique subscriptionRefer
      const subscriptionsRefer = generatesubscriptionRefer();

      // Logic to determine sub course ids based on subscription id
      let subCourseIds = [];
      if (subscriptionIdNumber === 1) {
        subCourseIds = [1];
      } else if (subscriptionIdNumber === 2) {
        subCourseIds = [2, 3];
      } else if (subscriptionIdNumber === 3) {
        subCourseIds = [4, 5, 6];
      }

      // Add each sub-course with its unique referral code
      subCourseIds.forEach((id) => {
        const subCourseRefer = generatesubCourseRefer();
        user.Subcourse.push({
          Subcourseid: id,
          Subcourse_refer: subCourseRefer,
        });
      });

      // Add subscription with its unique referral code
      user.Subscription.push({
        Subscriptionid: subscriptionIdNumber,
        Subscription_refer: subscriptionsRefer,
      });

      // Save the updated user document
      await user.save();

      // Return a success response
      return NextResponse.json(
        { message: "Subscription added successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}

// Function to generate a random alphanumeric string for subscriptionRefer
function generatesubscriptionRefer() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let subscriptionRefer = "";
  for (let i = 0; i < 9; i++) {
    subscriptionRefer += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return subscriptionRefer;
}

// Function to generate a random alphanumeric string for subCourseRefer
function generatesubCourseRefer() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let subCourseRefer = "";
  for (let i = 0; i < 9; i++) {
    subCourseRefer += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return subCourseRefer;
}
