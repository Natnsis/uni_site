"use client";

import { fetchSchedule } from "@/actions/schedule.action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

interface Schedule {
  day: string;
  time: string;
  food: string;
}

export function CafeTable() {
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  useEffect(() => {
    const getSchedule = async () => {
      const response = await fetchSchedule();
      if (response?.success) {
        setSchedule(response.schedule);
      } else {
        console.error("Failed to fetch schedule:", response.error);
      }
    };
    getSchedule();
  }, []);

  if (schedule.length === 0) {
    return <div className="text-center p-6">No schedule available</div>;
  }

  const getFood = (day: string, time: string) =>
    schedule.find((item) => item.day === day && item.time === time)?.food ||
    " - ";

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full border-collapse border border-gray-300">
        <TableCaption className="text-sm text-gray-600 py-3">
          Current cafeteria schedule shown to students
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="border border-gray-300 px-4 py-2 text-left w-36">
              Days
            </TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left min-w-[150px]">
              Breakfast
            </TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left min-w-[150px]">
              Lunch
            </TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left min-w-[150px]">
              Dinner
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ].map((day) => (
            <TableRow key={day} className="even:bg-white odd:bg-gray-50">
              <TableCell className="capitalize border border-gray-300 px-4 py-3 font-semibold w-36">
                {day}
              </TableCell>
              <TableCell className="border border-gray-300 px-4 py-3">
                {getFood(day, "breakfast")}
              </TableCell>
              <TableCell className="border border-gray-300 px-4 py-3">
                {getFood(day, "lunch")}
              </TableCell>
              <TableCell className="border border-gray-300 px-4 py-3">
                {getFood(day, "dinner")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
