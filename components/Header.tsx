import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Bell, CircleUserRound } from "lucide-react";

type props = {
  title: String;
};
const Header = ({ title }: props) => {
  return (
    <div className="w-full flex justify-between items-center mb-5">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="flex gap-8 items-center">
        <ModeToggle />
        <p>Hello, Admin!</p>
        <Bell />
        <CircleUserRound />
      </div>
    </div>
  );
};

export default Header;
