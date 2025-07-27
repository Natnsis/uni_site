import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const caption = formData.get("caption") as string;

  if (!file || !caption) {
    return NextResponse.json(
      { success: false, error: "File or caption missing" },
      { status: 400 }
    );
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "gallery" }, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        })
        .end(buffer);
    });

    const imageRecord = await prisma.gallery.create({
      data: {
        caption,
        imageUrl: result.secure_url,
      },
    });

    return NextResponse.json({ success: true, image: imageRecord });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}
