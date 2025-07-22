import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Bell, CircleUserRound } from "lucide-react";
import { UserButton } from "@stackframe/stack";
import { getUserDetails } from "@/actions/user.action";
import { stackServerApp } from "@/stack";

type props = {
  title: String;
};
const Header = async ({ title }: props) => {
  const user = stackServerApp.getUser();
  const userProfile = await getUserDetails(user?.id);
  return (
    <div className="w-full flex justify-between items-center mb-5">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="flex gap-8 items-center">
        <ModeToggle />
        {userProfile?.name && (
          <span className="text-[14px] text-gray-600 dark:text-gray-300">{`Hello!, ${userProfile.name.split(
            " "[0]
          )}`}</span>
        )}
        <Bell />
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
