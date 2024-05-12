// pages/api/profile.js

// import { connectToDB } from "../../lib/util";
// import { User } from "../../lib/models";
// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";

// export default async function handler(req, res) {
//   connectToDB();

//   const session = await getServerSession({ req, res });

//   if (!session) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { email } = session.user;

//   try {
//     if (!email) {
//       return NextResponse.json({ error: "Email is required" }, { status: 400 });
//     }

//     const userData = await User.findOne({ email });

//     if (!userData) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }
//     const coursesFromDB =
//       // Assuming courses is an array field in your user schema

//       {
//         name: session.user.username || "",
//         email: session.user.email || "",
//         id: session.phone || "",
//         followers: session.refers || 0,
//         bio: session.bio || "",
//         joined: session.dob || "",
//         social: session.user.social || {},
//         gender: session.gender || "", // Assigning gender value
//         state: session.state || "", // Assigning gender value
//       };
// console.log(coursesFromDB); 
//     return NextResponse.json(userData, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
