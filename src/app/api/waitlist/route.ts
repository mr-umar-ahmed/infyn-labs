import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: "7gb9ayen",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const { email, suggestions } = await req.json();

    await client.create({
      _type: 'waitlist',
      email,
      suggestions,
      status: 'New',
      joinedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Determine the error message safely without using 'any'
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
}