"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Bell } from "lucide-react";
import { UserButton, useUser } from "@stackframe/stack";

type props = {
  title: String;
};
const Header = ({ title }: props) => {
  const user = useUser();
  return (
    <div className="w-full flex justify-between items-center mb-5">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="flex gap-8 items-center">
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <div className="hidden sm:block">
          {user
            ? `Hello, ${user.displayName ?? "anon"}`
            : "You are not logged in"}
        </div>

        <UserButton />
      </div>
    </div>
  );
};

export default Header;
