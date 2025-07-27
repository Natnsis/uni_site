"use server";

import prisma from "@/lib/prisma";

export async function createSchedule({
  day,
  time,
  food,
}: {
  day: string;
  time: string;
  food: string;
}) {
  try {
    const schedule = prisma.schedule.create({
      data: { day, time, food },
    });

    return { success: true, schedule };
  } catch (e) {
    console.log("error unable to insert schedule", e);
  }
}

export async function fetchSchedule() {
  try {
    const schedule = await prisma.schedule.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, schedule };
  } catch (e) {
    console.log("error fetching schedule", e);
  }
}
