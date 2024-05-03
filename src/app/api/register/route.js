import { User } from "../../lib/models";
import { connectToDB } from "../../lib/util";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectToDB();
    const { first_name, email, gender, dob, phone, password, state } =
      await req.json();
    const exists = await User.findOne({ $or: [{ email }] });
    if (exists) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      first_name,
      email,
      gender,
      dob,
      phone,
      password: hashedPassword,
      state,
      course: [
        {
          courseid: "",
          courses_refer: "",
        },
      ],
      Subscription: [
        {
          Subscriptionid: "",
          sub_refer: "",
        },
      ],
      social: [
        {
          twitter:"",
          facebook:"" ,
          instagram:"" ,
          linkedIn:"" ,
        },
      ],
      bio: "Hi i am a regular user of Gurukul skills",
      refers:0,
      refercode:'',
    });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Error occured while registering" },
      { status: 500 }
    );
  }
}
