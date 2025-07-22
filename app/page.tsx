"use client";

import WelcomeHeader from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <WelcomeHeader />
      {/* hero */}
      <div className="my-10 flex gap-8">
        <div className="w-[40%] px-20 py-10 ">
          <h1>Explore all the Features and use them for free </h1>
          <p className="text-[40px] font-extrabold">
            University Students Management Platform
          </p>
          <div className="flex items-center mt-20 gap-5">
            <Button variant="secondary" size="lg">
              <Link href="/dashboard">Login</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Play /> watch demo
            </Button>
          </div>
        </div>
        <div className="bg-white w-[60%] p-5">
          <Image
            src="/homeFront.png"
            alt="home screen image"
            width={600}
            height={600}
          />
        </div>
      </div>
      <p className="text-center text-gray-400 "> copy right &copy; 2025 </p>
    </main>
  );
};

export default page;
