"use server";

import prisma from "@/lib/prisma";

interface curriculum {
  name: string;
  description: string;
  year: string;
  department: string;
}
export async function postCurriculum({
  name,
  description,
  year,
  department,
}: curriculum) {
  try {
    const curriculum = await prisma.curriculum.create({
      data: { name, description, year, department },
    });
    return { success: true };
  } catch (e) {
    console.log("unable to post curriculum", e);
  }
}

//add curriculums
