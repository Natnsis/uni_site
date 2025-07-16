import WelcomeHeader from "@/components/WelcomeHeader";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <WelcomeHeader />
      {/* hero */}
      <div className="my-10 flex gap-8">
        <div className="bg-white w-1/2 px-20 bg-black text-white ">
          <h3>Explore many features all for free</h3>
          <h1 className="">
            Students Activity <span>Managing Platform</span>
          </h1>
        </div>
        <div className="bg-white w-1/2 p-5">
          <Image
            src="/homeFront.png"
            alt="home screen image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
