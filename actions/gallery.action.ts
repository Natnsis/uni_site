"use server";

import prisma from "@/lib/prisma";

export async function uploadToGallery(caption: string, imageUrl: string) {
  try {
    const result = await prisma.gallery.create({
      data: {
        caption,
        imageUrl,
      },
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("DB error:", error);
    return { success: false, error: "Failed to save to DB" };
  }
}
