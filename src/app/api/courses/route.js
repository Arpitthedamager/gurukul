//working but with defult
import { User } from "../../lib/models";
import { connectToDB } from "../../lib/util";
import { NextResponse } from "next/server";

const defaultTransaction = {
  email: "arpitthekumar37@gmail.com",
  courseId: 2,
};
export async function POST(req, res) {
  // Your POST method logic here
  // Ensure MongoDB connection
  await connectToDB();
  console.log(req.body);
  if (req.method === "POST") {
    try {
      // Extract necessary data from the request body
      const { email, courseId } = await req.json();
      // const { email, courseId } =  defaultTransaction;
      console.log("Received data:", req.json());
      console.log(email);
      console.log(courseId);
      // Generate the courseRefer here (for demonstration purposes, generating a random string)
      const courseRefer = generateCourseRefer();
      const courseid = parseInt(courseId);

      // Fetch the user from the database based on the email
      const user = await User.findOne({ email: email });
      console.log(courseid);

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      user.course.push({ courseid: courseid, courses_refer: courseRefer });
      console.log(courseid, courseRefer);

      // Update the user's document with the purchased course details and the generated referral code
      // user.course = { courseId, courses_refer: courseRefer };

      // Save the updated user document
      await user.save();

      // Return a success response
      return NextResponse.json(
        { message: "Course added successfully" },
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

// Function to generate a random alphanumeric string for courseRefer
function generateCourseRefer() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let courseRefer = "";
  for (let i = 0; i < 6; i++) {
    courseRefer += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return courseRefer;
}
