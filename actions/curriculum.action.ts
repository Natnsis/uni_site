"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

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

export async function getCurriculum() {
  try {
    const curriculum = await prisma.curriculum.findMany({
      orderBy: [{ department: "asc" }, { name: "asc" }],
    });
    return { success: true, curriculum };
  } catch (e) {
    console.log(e);
  }
}

export async function deleteCurriculum(id: string) {
  try {
    const deleteCurriculum = await prisma.curriculum.delete({
      where: { id },
    });
    return { success: true, deleteCurriculum };
  } catch (e) {
    console.log(e);
  }
}
