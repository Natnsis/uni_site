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

export async function fetchNews() {
  try {
    const newsList = await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, news: newsList };
  } catch (error) {
    return { success: false, error: "Failed to fetch news" };
  }
}

export async function deleteNews(id: string) {
  try {
    await prisma.news.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete news" };
  }
}

export async function getNewsById(id: string) {
  try {
    const news = await prisma.news.findUnique({
      where: { id },
    });
    return { success: true, news };
  } catch (error) {
    return { success: false, error: "Failed to fetch news item" };
  }
}

export async function updateNews(
  id: string,
  data: { title?: string; content?: string; published?: boolean }
) {
  try {
    const updated = await prisma.news.update({
      where: { id },
      data,
    });
    return { success: true, news: updated };
  } catch (error) {
    return { success: false, error: "Failed to update news" };
  }
}
