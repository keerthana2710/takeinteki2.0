import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// SDK auto-reads CLOUDINARY_URL from environment if set.
// Add secure:true to always get https URLs.
cloudinary.config({ secure: true });

export async function POST(request) {
  // Guard: ensure CLOUDINARY_URL is configured
  if (!process.env.CLOUDINARY_URL) {
    return NextResponse.json(
      { error: "Cloudinary is not configured. Please set CLOUDINARY_URL in .env.local." },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "resumes", resource_type: "auto" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    const message = error?.message || "Upload failed. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

