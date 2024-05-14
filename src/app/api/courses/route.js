import { User } from "../../lib/models";
import { connectToDB } from "../../lib/util";
import { NextResponse } from "next/server";

const defaultTransaction = {
  email: "arpitthekumar37@gmail.com",
  courseId: 2,
};
export async function POST(req, res) {
  // Ensure MongoDB connection
  await connectToDB();

  if (req.method === "POST") {
    try {
      // Extract necessary data from the request body
      const { email, courseId } = await req.json();
      // const { email, courseId } = defaultTransaction;

      console.log(email, courseId);
      // Ensure courseId is a number
      const subscriptionIdNumber = parseInt(courseId);
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
      
      // Add each sub-course with its unique referral code
     

      // Add subscription with its unique referral code
      user.course.push({
        courseid: subscriptionIdNumber,
        courses_refer: subscriptionsRefer,
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


