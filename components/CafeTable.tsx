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
      if (response.success) {
        setSchedule(response.schedule);
      } else {
        console.error("Failed to fetch schedule:", response.error);
      }
    };
    getSchedule();
  }, []);
  if (schedule.length === 0) {
    return <div className="text-center">No schedule available</div>;
  }
  console.log("Schedule Data:", schedule);

  // MONDAY
  const mondayBreakfast = schedule.filter(
    (item) => item.day === "monday" && item.time === "breakfast"
  );
  const mondayLunch = schedule.filter(
    (item) => item.day === "monday" && item.time === "lunch"
  );
  const mondayDinner = schedule.filter(
    (item) => item.day === "monday" && item.time === "dinner"
  );

  // TUESDAY
  const tuesdayBreakfast = schedule.filter(
    (item) => item.day === "tuesday" && item.time === "breakfast"
  );
  const tuesdayLunch = schedule.filter(
    (item) => item.day === "tuesday" && item.time === "lunch"
  );
  const tuesdayDinner = schedule.filter(
    (item) => item.day === "tuesday" && item.time === "dinner"
  );

  // WEDNESDAY
  const wednesdayBreakfast = schedule.filter(
    (item) => item.day === "wednesday" && item.time === "breakfast"
  );
  const wednesdayLunch = schedule.filter(
    (item) => item.day === "wednesday" && item.time === "lunch"
  );
  const wednesdayDinner = schedule.filter(
    (item) => item.day === "wednesday" && item.time === "dinner"
  );

  // THURSDAY
  const thursdayBreakfast = schedule.filter(
    (item) => item.day === "thursday" && item.time === "breakfast"
  );
  const thursdayLunch = schedule.filter(
    (item) => item.day === "thursday" && item.time === "lunch"
  );
  const thursdayDinner = schedule.filter(
    (item) => item.day === "thursday" && item.time === "dinner"
  );

  // FRIDAY
  const fridayBreakfast = schedule.filter(
    (item) => item.day === "friday" && item.time === "breakfast"
  );
  const fridayLunch = schedule.filter(
    (item) => item.day === "friday" && item.time === "lunch"
  );
  const fridayDinner = schedule.filter(
    (item) => item.day === "friday" && item.time === "dinner"
  );

  // SATURDAY
  const saturdayBreakfast = schedule.filter(
    (item) => item.day === "saturday" && item.time === "breakfast"
  );
  const saturdayLunch = schedule.filter(
    (item) => item.day === "saturday" && item.time === "lunch"
  );
  const saturdayDinner = schedule.filter(
    (item) => item.day === "saturday" && item.time === "dinner"
  );

  // SUNDAY
  const sundayBreakfast = schedule.filter(
    (item) => item.day === "sunday" && item.time === "breakfast"
  );
  const sundayLunch = schedule.filter(
    (item) => item.day === "sunday" && item.time === "lunch"
  );
  const sundayDinner = schedule.filter(
    (item) => item.day === "sunday" && item.time === "dinner"
  );

  return (
    <Table>
      <TableCaption>Current cafeteria schedule shown to students</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Days</TableHead>
          <TableHead>Breakfast</TableHead>
          <TableHead>Lunch</TableHead>
          <TableHead>Dinner</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="capitalize">Monday</TableCell>
          <TableCell>{mondayBreakfast[0]?.food || " - "}</TableCell>
          <TableCell>{mondayLunch[0]?.food || " - "}</TableCell>
          <TableCell>{mondayDinner[0]?.food || " - "}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Tuesday</TableCell>
          <TableCell>{tuesdayBreakfast[0]?.food || " - "}</TableCell>
          <TableCell>{tuesdayLunch[0]?.food || " - "}</TableCell>
          <TableCell>{tuesdayDinner[0]?.food || " - "}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Wednesday</TableCell>
          <TableCell>{wednesdayBreakfast[0]?.food || " - "}</TableCell>
          <TableCell>{wednesdayLunch[0]?.food || " - "}</TableCell>
          <TableCell>{wednesdayDinner[0]?.food || " - "}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Thursday</TableCell>
          <TableCell>{thursdayBreakfast[0]?.food || " - "}</TableCell>
          <TableCell>{thursdayLunch[0]?.food || " - "}</TableCell>
          <TableCell>{thursdayDinner[0]?.food || " - "}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Friday</TableCell>
          <TableCell>{fridayBreakfast[0]?.food || " - "}</TableCell>
          <TableCell>{fridayLunch[0]?.food || " - "}</TableCell>
          <TableCell>{fridayDinner[0]?.food || " - "}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Saturday</TableCell>
          <TableCell>{saturdayBreakfast[0]?.food || " - "}</TableCell>
          <TableCell>{saturdayLunch[0]?.food || " - "}</TableCell>
          <TableCell>{saturdayDinner[0]?.food || " - "}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Sunday</TableCell>
          <TableCell>{sundayBreakfast[0]?.food || " - "}</TableCell>
          <TableCell>{sundayLunch[0]?.food || " - "}</TableCell>
          <TableCell>{sundayDinner[0]?.food || " - "}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
