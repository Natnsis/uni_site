import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  CalendarCheck,
  ChartNoAxesCombined,
  House,
  Images,
  Newspaper,
  NotepadText,
  RollerCoaster,
  Usb,
  User,
} from "lucide-react";

const SideBar = () => {
  return (
    <div className="w-1/5 flex-col flex gap-5">
      <div className="border-b-1 py-5">
        <h1 className="text-start font-bold text-xl ">
          Asu Student Assistance
        </h1>
      </div>
      <Link href="/dashboard">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <House />
          Dashboard
        </Button>
      </Link>
      <Link href="/dashboard/news">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <Newspaper />
          News and Updates
        </Button>
      </Link>
      <Link href="/dashboard/schedules">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <CalendarCheck />
          Schedule
        </Button>
      </Link>
      <Link href="/dashboard/curriculums">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <NotepadText />
          Curriculum
        </Button>
      </Link>
      <Link href="/dashboard/gallery">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <Images />
          Gallery
        </Button>
      </Link>
      <Link href="/dashboard/lounges">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <RollerCoaster />
          Lounges
        </Button>
      </Link>
      <Link href="/dashboard/representatives">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <User />
          Representatives
        </Button>
      </Link>
      <Link href="/dashboard/about">
        <Button variant="ghost" className="flex justify-start py-5 ">
          <Usb />
          About
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;
