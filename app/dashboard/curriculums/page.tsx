import { CurriculumTable } from "@/components/CurriculumTable";
import Header from "@/components/Header";
import { MiniSidebar } from "@/components/MIniSidebar";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-screen p-5 h-screen">
      <div className="flex w-full">
        <SideBar />
        <MiniSidebar />
        <div className="w-4/5 p-5">
          <Header title="Curriculums" />
          <div className="mt-10">
            <CurriculumTable />
          </div>
          <Link href="/Inner/curriculum">
            <Button className="sticky bottom-5 z-50">Add Curriculum</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
