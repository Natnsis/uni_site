"use server";

import prisma from "@/lib/prisma";

export async function galleryCount() {
  try {
    const gallery = await prisma.gallery.count();
    return { success: true, gallery };
  } catch (e) {
    console.log(e);
  }
}

export async function newsCount() {
  try {
    const news = await prisma.news.count();
    return { success: true, news };
  } catch (e) {
    console.log(e);
  }
}
