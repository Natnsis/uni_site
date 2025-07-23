import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <div className="w-4/5 p-5">
          <Header title="About" />
          <div className="grid w-full gap-3 mt-5 ">
            <h1 className="text-center text-lg">
              Edit the text of about screen{" "}
            </h1>
            <Textarea
              placeholder="The ASU App is your all-in-one assistant for university life at Assosa University. From checking class schedules and tracking your GPA to staying updated on news and announcements, the app is designed to make student life easier, smarter, and more connected. Built by students, for students — to help you succeed every step of the way."
              id="message"
            />
            <Button>Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
