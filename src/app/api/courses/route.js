// pages/api/courses.js
// Import your User model

import { User } from "@/app/lib/models";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  const userId = req.query.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Extract courses data from the user object and send it in the response
    const coursesFromDB = user.course.map((course) => ({
      id: course.courseid,
      referCode: course.courses_refer,
    }));
    res.json(coursesFromDB);
  } catch (error) {
    console.error("Error fetching user courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
