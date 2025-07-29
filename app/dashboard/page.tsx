import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";

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
