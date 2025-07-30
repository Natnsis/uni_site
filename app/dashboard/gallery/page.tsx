import GalleryForm from "@/components/GalleryForm";
import { GalleryTable } from "@/components/GalleryTable";
import Header from "@/components/Header";
import { MiniSidebar } from "@/components/MIniSidebar";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <MiniSidebar />
        <div className="w-4/5 p-5">
          <Header title="Gallery" />
          <div>
            <GalleryForm />
          </div>
          <div className="mt-10">
            <GalleryTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
