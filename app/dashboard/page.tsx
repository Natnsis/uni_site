import Count from "@/components/Count";
import Header from "@/components/Header";
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
            <div className="w-4/5 p-5">
              <Header title="Dashboard" />
              <div className="mt-5">
                <Count />
              </div>
              <div className="mt-5">
                <div>
                  <h1 className="text-lg">Overview</h1>
                  <div className="flex gap-5">
                    <Card className="flex p-5">
                      <div>
                        <Image
                          src="/news.png"
                          width={200}
                          height={100}
                          alt="hehe"
                          className="rounded-lg mb-5"
                        />
                        <h1 className="font-bold text-md text-start">
                          News and updates
                        </h1>
                        <p>
                          post news and important updates for students so that
                          they could access it quickly with the dedicted app.
                        </p>
                      </div>
                    </Card>
                    <Card className="flex p-5">
                      <div>
                        <Image
                          src="/schedule.png"
                          width={200}
                          height={100}
                          alt="hehe"
                          className="rounded-lg mb-5"
                        />
                        <h1 className="font-bold text-md text-start">
                          Cafeteria Schedule
                        </h1>
                        <p>
                          Post all the updates of the cafeteria schedule so that
                          the students get well prepared for what is waiting for
                          them on time.
                        </p>
                      </div>
                    </Card>
                    <Card className="flex p-5">
                      <div>
                        <Image
                          src="/curriculum.png"
                          width={200}
                          height={100}
                          alt="hehe"
                          className="rounded-lg mb-5"
                        />
                        <h1 className="font-bold text-md text-start">
                          Curriculum
                        </h1>
                        <p>
                          post curriculums of specific courses so that students
                          can check the courses they will be taking according to
                          their year and department.
                        </p>
                      </div>
                    </Card>
                    <Card className="flex p-5">
                      <div>
                        <Image
                          src="/gallery.png"
                          width={200}
                          height={100}
                          alt="hehe"
                          className="rounded-lg mb-5"
                        />
                        <h1 className="font-bold text-md text-start">
                          Gallery
                        </h1>
                        <p>
                          Gallery to Post about buildings and places within the
                          campus.
                        </p>
                      </div>
                    </Card>
                    <Card className="flex p-5">
                      <div>
                        <Image
                          src="/about.png"
                          width={200}
                          height={100}
                          alt="hehe"
                          className="rounded-lg mb-5"
                        />
                        <h1 className="font-bold text-md text-start">About</h1>
                        <p>
                          description from the platform to be seen by students.
                        </p>
                      </div>
                    </Card>
                  </div>
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
