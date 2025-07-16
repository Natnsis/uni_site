import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const WelcomeHeader = () => {
  return (
    <div className="flex p-5 justify-between border-b-1">
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
      <div className="space-x-10 flex items-center">
        <Link href="/">Platform</Link>
        <Link
          href="
        /"
        >
          Features
        </Link>
        <Link href="/">How it works</Link>
      </div>
      <div>
        <Button className="rounded-full bg-green-400">Get the app</Button>
      </div>
    </div>
  );
};

export default WelcomeHeader;
