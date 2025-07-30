import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const WelcomeHeader = () => {
  return (
    <div className="sm:flex sm:p-5 sm:justify-between border-b-1">
      <div className="flex gap-3 items-center text-4xl font-extrabold ">
        <Image
          src="/asuLogo.png"
          className="rounded-full"
          alt="coverImage"
          width={60}
          height={60}
        />
        <h1>Student Assistance</h1>
      </div>
      <div className="lg:flex hidden lg:space-x-4 lg:items-center">
        <Link href="/">Platform</Link>
        <Link
          href="
        /"
        >
          Features
        </Link>
        <Link href="/">How it works</Link>
      </div>
      <div className="sm:flex sm:items-center flex justify-center mb-5 ">
        <Button className="rounded-full bg-green-400">Get the app</Button>
      </div>
    </div>
  );
};

export default WelcomeHeader;
