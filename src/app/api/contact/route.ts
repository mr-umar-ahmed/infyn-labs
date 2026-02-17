import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7gb9ayen",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, interest, message } = body;

    const result = await client.create({
      _type: 'serviceRequest',
      name,
      email,
      service: interest,
      message,
      status: 'New',
    });

    return NextResponse.json({ message: "Success", id: result._id }, { status: 200 });
  } catch (error) {
    console.error("Sanity Error:", error);
    return NextResponse.json({ message: "Error uploading to Sanity" }, { status: 500 });
  }
}