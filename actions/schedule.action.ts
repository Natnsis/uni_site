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

interface UpdateScheduleParams {
  id: string;
  food: string;
}
export async function updateSchedule(id: string, data: { food?: string }) {
  try {
    const updated = await prisma.schedule.update({
      where: { id },
      data,
    });
    return { success: true, schedule: updated };
  } catch (error) {
    return { success: false, error: "Failed to update news" };
  }
}

export async function fetchScheduleById(id: string) {
  try {
    const schedule = await prisma.schedule.findUnique({
      where: { id },
    });
    return { success: true, schedule };
  } catch (e) {
    console.log("error fetching schedule by id", e);
    return { success: false };
  }
}
