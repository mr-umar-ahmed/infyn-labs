import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7gb9ayen", // <--- FIXED
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, location, eventTitle } = await req.json();

    await client.create({
      _type: 'eventRegistration',
      name,
      email,
      phone,
      location,
      eventTitle,
      registeredAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Uplink Failure";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}