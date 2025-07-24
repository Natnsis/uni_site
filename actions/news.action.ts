"use server";

import prisma from "@/lib/prisma";

export async function createNews({
  title,
  content,
  published,
  authorId,
}: {
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}) {
  try {
    const news = await prisma.news.create({
      data: { title, content, published, authorId },
    });
    return { success: true, news };
  } catch (error) {
    return { success: false, error: "Failed to create news" };
  }
}
