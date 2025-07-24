import { CurriculumTable } from "@/components/CurriculumTable";
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
          <Header title="Curriculums" />
          <div>
            <CurriculumTable />
          </div>
          <Link href="/Inner/curriculum">
            <Button className="sticky bottom-5">Add Curriculum</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
