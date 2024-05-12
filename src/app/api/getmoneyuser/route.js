import { connectToDB } from "../../lib/util";
import { User } from "../../lib/models";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  connectToDB();

  const session = await getServerSession({ req, res });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email } = session.user;

  try {
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const userData = await User.findOne({ email });

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const { _id: userId, current_balance, Transaction } = userData;

    console.log("User ID:", userId);
    console.log("Current Balance:", current_balance);
    console.log("Transactions:", Transaction);

    return NextResponse.json(
      { userId, current_balance, Transaction },
      { status: 200 }
    );

    // Logging the courses to console
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

