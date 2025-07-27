"use server";

import prisma from "@/lib/prisma";

export async function addAboutText(content: string) {
  try {
    const about = await prisma.about.create({
      data: { content },
    });
    return { success: true, about };
  } catch (e) {
    console.error("Data couldn't be inserted", e);
    return { success: false };
  }
}

export async function fetchAboutText() {
  try {
    const about = await prisma.about.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, about };
  } catch (e) {
    console.log("unable to fetch about text", e);
  }
}
