import { BarGraph } from "@/components/BarGraph";
import Header from "@/components/Header";
import NumberCard from "@/components/NumberCard";
import { PiChart } from "@/components/PiChart";
import SideBar from "@/components/SideBar";
import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";

import React from "react";

const page = async () => {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <>
      {user ? (
        <div className="w-screen p-5">
          <div className="flex w-full">
            <SideBar />
            <div className="w-4/5 p-5">
              <Header title="Dashboard" />
              <div className="mt-5 flex w-full items-center">
                <NumberCard title="Total Users" value="10,000" />
                <NumberCard title="Active Users" value="8901" />
                <NumberCard title="Total Posts" value="432" />
                <NumberCard title="Engagement Rate" value="76%" />
              </div>

              <div className="mt-5 flex w-full items-center justify-between">
                <BarGraph />
                <PiChart />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20">
          <SignUp />
        </div>
      )}
    </>
  );
};

export default page;
