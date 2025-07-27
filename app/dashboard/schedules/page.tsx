
import { CafeTable } from "@/components/CafeTable";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <div className="w-4/5 p-5">
          <Header title="Cafeteria Schedule" />
          <CafeTable />
        </div>
        <Link href="/Inner/schedule">
          <Button className="absolute right-5 bottom-5 z-50">
            Update Schedule
          </Button>
        </Link>
        <Link href="/Inner/schedule">
          <Button className="absolute right-5 bottom-20 z-50">
            Insert Schedule
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
