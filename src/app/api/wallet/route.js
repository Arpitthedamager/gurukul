//working but with defult
import { User } from "../../lib/models";
import { connectToDB } from "../../lib/util";
import { NextResponse } from "next/server";

const defaultTransaction = {
  id: "6636ac629236e39410489868",
  upiId: "122410",
  amount: 1000
};
export async function POST(req, res) {
  const { userId, amount, upiId } = await req.json();
  // const { id, amount, upiId } =defaultTransaction;
  await connectToDB();

  try {
    // Fetch user document from database
    console.log("id",userId)
    console.log("amount",amount)
    console.log("upiId",upiId)
    const user = await User.findById(userId);

    console.log(user)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // Check if user has sufficient balance for redemption
    if (user.current_balance < amount) {
      return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
    }

    // Update user's balance and add transaction
    user.current_balance -= amount;
    user.Transaction.push({ amount: -amount, upiId, timestamp: new Date() });

    // Save user document
    await user.save();

    // Return success response
    return NextResponse.json({ message: "Transaction successful" }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: "Failed to process transaction" }, { status: 500 });
  }
}
