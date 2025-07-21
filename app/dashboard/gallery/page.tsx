import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <div className="w-4/5 p-5">
          <Header title="Gallery" />
          
        </div>
      </div>
    </div>
  );
};

export default page;
