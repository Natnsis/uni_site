import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  CalendarCheck,
  House,
  Images,
  Newspaper,
  NotepadText,
  Usb,
} from "lucide-react";

const SideBar = () => {
  return (
    <aside className="hidden md:flex md:flex-col md:w-1/5 md:gap-4 bg-white border-r border-gray-200 h-screen p-6 sticky top-0 mr-5">
      <h1 className="text-left font-extrabold text-2xl mb-8 text-green-700">
        ASU Student Assistance
      </h1>

      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" passHref>
          <Button
            variant="ghost"
            className="flex items-center gap-3 justify-start py-3 px-4 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            <House className="w-5 h-5" />
            Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/news" passHref>
          <Button
            variant="ghost"
            className="flex items-center gap-3 justify-start py-3 px-4 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            <Newspaper className="w-5 h-5" />
            News and Updates
          </Button>
        </Link>

        <Link href="/dashboard/schedules" passHref>
          <Button
            variant="ghost"
            className="flex items-center gap-3 justify-start py-3 px-4 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            <CalendarCheck className="w-5 h-5" />
            Schedule
          </Button>
        </Link>

        <Link href="/dashboard/curriculums" passHref>
          <Button
            variant="ghost"
            className="flex items-center gap-3 justify-start py-3 px-4 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            <NotepadText className="w-5 h-5" />
            Curriculum
          </Button>
        </Link>

        <Link href="/dashboard/gallery" passHref>
          <Button
            variant="ghost"
            className="flex items-center gap-3 justify-start py-3 px-4 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            <Images className="w-5 h-5" />
            Gallery
          </Button>
        </Link>

        <Link href="/dashboard/about" passHref>
          <Button
            variant="ghost"
            className="flex items-center gap-3 justify-start py-3 px-4 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            <Usb className="w-5 h-5" />
            About
          </Button>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
