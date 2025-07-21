import { BarGraph } from "@/components/BarGraph";
import { ModeToggle } from "@/components/ModeToggle";
import NumberCard from "@/components/NumberCard";
import { PiChart } from "@/components/PiChart";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import {
  Bell,
  CalendarCheck,
  ChartNoAxesCombined,
  CircleUserRound,
  House,
  Newspaper,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <div className="w-4/5 p-5">
          <div className="w-full flex justify-between items-center mb-5">
            <div>
              <h1 className="text-4xl font-bold">Dashboard</h1>
            </div>
            <div className="flex gap-8 items-center">
              <ModeToggle />
              <p>Hello, Admin!</p>
              <Bell />
              <CircleUserRound />
            </div>
          </div>
          <div className="mt-5 flex w-full items-center">
            <NumberCard title="Total Users" value="10,000" />
            <NumberCard title="Active Users" value="8901" />
            <NumberCard title="Total Posts" value="432" />
            <NumberCard title="Engagement Rate" value="76%" />
          </div>

          <div className="mt-5 flex w-full items-center justify-between">
            <BarGraph />
            <PiChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
