"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addAboutText, fetchAboutText } from "@/actions/about.action";
import { Card } from "@/components/ui/card";
import { MiniSidebar } from "@/components/MIniSidebar";

interface AboutText {
  success: boolean;
  about: { content: string };
}
const page = () => {
  const [content, setContent] = useState<string>("");
  const [aboutText, setAboutText] = useState<AboutText[]>([]);

  const loadAboutText = async () => {
    try {
      const response = await fetchAboutText();
      if (response?.success) {
        setAboutText(response.about);
      }
    } catch (e) {
      console.log("Error fetching about text:", e);
    }
  };

  useEffect(() => {
    loadAboutText();
  }, []);

  console.log(aboutText);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const send = await addAboutText(content);

      if (send.success) {
        setContent("");
        alert("About text added successfully");
      } else {
        alert("Something went wrong while adding.");
      }
    } catch (e) {
      console.error("Error while adding about text:", e);
      alert("An error occurred while adding.");
    }
  };

  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <MiniSidebar />
        <div className="w-4/5 p-5">
          <Header title="About" />
          {/* insertion place */}
          <div className="grid w-full gap-3 mt-5 ">
            <h1 className="text-center text-lg">
              Edit the text of about screen{" "}
            </h1>
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="about this app"
                className="content"
                onChange={(e) => setContent(e.target.value)}
              />
              <Button type="submit" className="w-full mt-5">
                Add
              </Button>
            </form>
          </div>
          {/* display place */}
          <div className="mt-10">
            <h1 className="text-center mb-5">current About text</h1>
            <Card className="text-center">{aboutText[0]?.content}</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
