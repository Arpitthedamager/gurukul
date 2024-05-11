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

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export { GET as get };
