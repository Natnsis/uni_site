import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalendarCheck,
  House,
  Menu,
  Newspaper,
  NotepadText,
  Usb,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function MiniSidebar() {
  return (
    <div className="mt-6 sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel> Asu Student Assistance</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/dashboard">
                <Button variant="ghost">
                  <House />
                  Dashboard
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/news">
                <Button variant="ghost">
                  <Newspaper />
                  News and Updates
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/schedules">
                <Button variant="ghost">
                  <CalendarCheck />
                  Schedule
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/curriculums">
                <Button variant="ghost">
                  <NotepadText />
                  Curriculum
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/about">
                <Button variant="ghost">
                  <Usb />
                  About
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-center">
              <ModeToggle />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
