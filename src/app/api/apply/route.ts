import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

// Define dynamic to prevent static generation errors
export const dynamic = 'force-dynamic';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7gb9ayen", // <--- FIXED
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

type ApplicantPayload = {
  _type: "applicant";
  name: string;
  email: string;
  role: string;
  linkedin: string;
  github: string;
  startDate: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const payload: ApplicantPayload = {
      _type: "applicant",
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      role: (formData.get("role") as string) || "",
      linkedin: (formData.get("linkedin") as string) || "",
      github: (formData.get("github") as string) || "",
      startDate: (formData.get("startDate") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    if (!payload.name || !payload.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const file = formData.get("resume");

    // Handle file upload
    let assetId = null;
    if (file instanceof File && file.size > 0) {
       const extension = file.name.split(".").pop() || "pdf";
       const asset = await client.assets.upload("file", file, {
         filename: `${payload.name.replace(/\s+/g, "_")}_resume.${extension}`,
       });
       assetId = asset._id;
    }

    // Create applicant document
    await client.create({
      ...payload,
      resume: assetId ? {
        _type: "file",
        asset: { _type: "reference", _ref: assetId },
      } : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Uplink Error:", error);
    const message = error instanceof Error ? error.message : "Transmission Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}