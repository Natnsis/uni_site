"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { fetchSchedule } from "@/actions/schedule.action";
import router from "next/router";

interface Schedule {
  id: String;
  day: String;
  food: String;
  time: String;
}

const Schedule = () => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSchedule();
      if (response.success) {
        setSchedule(response.schedule);
      }
    };
    fetchData();
  }, []);

  const mondayBreakfast = schedule.filter(
    (item) => item.day === "monday" && item.time === "breakfast"
  );
  const mondayLunch = schedule.filter(
    (item) => item.day === "monday" && item.time === "lunch"
  );
  const mondayDinner = schedule.filter(
    (item) => item.day === "monday" && item.time === "dinner"
  );
  const tuesdayBreakfast = schedule.filter(
    (item) => item.day === "tuesday" && item.time === "breakfast"
  );
  const tuesdayLunch = schedule.filter(
    (item) => item.day === "tuesday" && item.time === "lunch"
  );
  const tuesdayDinner = schedule.filter(
    (item) => item.day === "tuesday" && item.time === "dinner"
  );
  const wednesdayBreakfast = schedule.filter(
    (item) => item.day === "wednesday" && item.time === "breakfast"
  );
  const wednesdayLunch = schedule.filter(
    (item) => item.day === "wednesday" && item.time === "lunch"
  );
  const wednesdayDinner = schedule.filter(
    (item) => item.day === "wednesday" && item.time === "dinner"
  );
  const thursdayBreakfast = schedule.filter(
    (item) => item.day === "thursday" && item.time === "breakfast"
  );
  const thursdayLunch = schedule.filter(
    (item) => item.day === "thursday" && item.time === "lunch"
  );
  const thursdayDinner = schedule.filter(
    (item) => item.day === "thursday" && item.time === "dinner"
  );
  const fridayBreakfast = schedule.filter(
    (item) => item.day === "friday" && item.time === "breakfast"
  );
  const fridayLunch = schedule.filter(
    (item) => item.day === "friday" && item.time === "lunch"
  );
  const fridayDinner = schedule.filter(
    (item) => item.day === "friday" && item.time === "dinner"
  );
  const saturdayBreakfast = schedule.filter(
    (item) => item.day === "saturday" && item.time === "breakfast"
  );
  const saturdayLunch = schedule.filter(
    (item) => item.day === "saturday" && item.time === "lunch"
  );
  const saturdayDinner = schedule.filter(
    (item) => item.day === "saturday" && item.time === "dinner"
  );
  const sundayBreakfast = schedule.filter(
    (item) => item.day === "sunday" && item.time === "breakfast"
  );
  const sundayLunch = schedule.filter(
    (item) => item.day === "sunday" && item.time === "lunch"
  );
  const sundayDinner = schedule.filter(
    (item) => item.day === "sunday" && item.time === "dinner"
  );
  if (schedule.length === 0) {
    return (
      <div>
        <h1 className="text-lg text-center font-extrabold">
          No schedule available
        </h1>
      </div>
    );
  }
  return (
    <div className="p-10 w-[80%] h-screen">
      <div className="flex w-full justify-end">
        <Link href="/dashboard/schedules">
          <Button>Back</Button>
        </Link>
      </div>
      <h1 className="text-lg text-center font-extrabold">
        Press the food you want to change
      </h1>
      <div className="mt-5">
        <Table>
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
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${mondayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {mondayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${mondayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {mondayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${mondayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {mondayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Tuesday</TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${tuesdayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {tuesdayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${tuesdayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {tuesdayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${tuesdayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {tuesdayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Wednesday</TableCell>
              <TableCell className="text-start">
                <Link
                  href={`/dashboard/schedules/${wednesdayBreakfast[0]?.id}`}
                >
                  <Button variant="secondary">
                    {wednesdayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${wednesdayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {wednesdayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${wednesdayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {wednesdayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Thursday</TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${thursdayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {thursdayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${thursdayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {thursdayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${thursdayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {thursdayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Thursday</TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${thursdayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {thursdayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${thursdayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {thursdayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${thursdayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {thursdayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Friday</TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${fridayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {fridayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${fridayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {fridayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${fridayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {fridayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Friday</TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${fridayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {fridayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${fridayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {fridayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${fridayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {fridayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Saturday</TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${saturdayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {saturdayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${saturdayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {saturdayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${saturdayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {saturdayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Sunday</TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${sundayBreakfast[0]?.id}`}>
                  <Button variant="secondary">
                    {sundayBreakfast[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${sundayLunch[0]?.id}`}>
                  <Button variant="secondary">
                    {sundayLunch[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
              <TableCell className="text-start">
                <Link href={`/dashboard/schedules/${sundayDinner[0]?.id}`}>
                  <Button variant="secondary">
                    {sundayDinner[0]?.food || " - "}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Schedule;
