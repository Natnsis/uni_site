"use server";

import prisma from "@/lib/prisma";

export async function uploadToGallery(caption: string, imageUrl: string) {
  try {
    const gallery = await prisma.gallery.create({
      data: {
        caption,
        imageUrl,
      },
    });

    return { success: true, gallery };
  } catch (e) {
    console.error("DB insert failed:", e);
    return { success: false };
  }
}

export async function getGallery() {
  try {
    const gallery = await prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, gallery };
  } catch (e) {
    console.log("error fetching the gallery", e);
    return { success: false };
  }
}
