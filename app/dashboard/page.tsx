import Count from "@/components/Count";
import Header from "@/components/Header";
import { MiniSidebar } from "@/components/MIniSidebar";
import SideBar from "@/components/SideBar";
import { Card } from "@/components/ui/card";
import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";
import Image from "next/image";

const page = async () => {
  const user = await stackServerApp.getUser();
  return (
    <>
      {user ? (
        <div className="w-screen p-5">
          <div className="flex w-full">
            <SideBar />
            <MiniSidebar />
            <div className="w-4/5 p-5">
              <Header title="Dashboard" />
              <div className="mt-5">
                <Count />
              </div>

              <div className="mt-5">
                <h1 className="text-lg font-semibold mb-3">Overview</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {[
                    {
                      img: "/news.png",
                      title: "News and updates",
                      desc: "Post news and important updates for students so they can access them quickly in the app.",
                    },
                    {
                      img: "/schedule.png",
                      title: "Cafeteria Schedule",
                      desc: "Post all updates of the cafeteria schedule so students can prepare ahead of time.",
                    },
                    {
                      img: "/curriculum.png",
                      title: "Curriculum",
                      desc: "Post curriculums of specific courses so students can see their upcoming classes.",
                    },
                    {
                      img: "/gallery.png",
                      title: "Gallery",
                      desc: "Showcase buildings and places within the campus.",
                    },
                    {
                      img: "/about.png",
                      title: "About",
                      desc: "Provide a description of the platform for students to view.",
                    },
                  ].map((item, i) => (
                    <Card
                      key={i}
                      className="p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start"
                    >
                      <Image
                        src={item.img}
                        width={150}
                        height={80}
                        alt={item.title}
                        className="rounded-lg mb-3 w-full object-cover h-28"
                      />
                      <h1 className="font-semibold text-base mb-1">
                        {item.title}
                      </h1>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </Card>
                  ))}
                </div>
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
