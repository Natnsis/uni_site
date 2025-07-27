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

// const mondayLunches = rawSchedule.filter(
//   (item) => item.day === 'MON' && item.foodTime === 'LUNCH'
// );
