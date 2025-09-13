import connectDB from "../../db/dbConnect.js";
import User from "../../models/User.js";

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "Please fill all fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = await User.create({ name, email, password });

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        user: { name: user.name, email: user.email },
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error", details: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


export async function GET() {
  await connectDB();

  try {
    const users = await User.find();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error", details: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}