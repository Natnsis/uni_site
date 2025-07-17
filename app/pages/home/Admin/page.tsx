import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  BellRing,
  CircleUser,
  LayoutDashboard,
  Mail,
  Maximize,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const Home = async () => {
  const data = await getData();
  return (
    <main className="bg-white h-screen ">
      <div className="p-5 flex w-screen h-full space-x-5">
        <div className="w-1/5 h-full">
          <div className="flex space-x-5 items-center ">
            <Image
              src="/asuLogo.png"
              width={60}
              height={60}
              alt="logoIMG"
              className="rounded-full"
            />
            <h1 className="text-black text-xl font-bold ">
              Student Assistance
            </h1>
          </div>
          <div className="mt-5 space-y-5">
            <h2 className="text-gray-600">Dashboard</h2>
            <Button
              variant="outline"
              size="lg"
              className="bg-green-400 w-3/4 ml-5 h-15 text-white font-extrabold"
            >
              <LayoutDashboard /> Dashboard
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-green-400 w-3/4 ml-5 h-15 text-white font-extrabold"
            >
              <Mail /> Inboxes
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-green-400 w-3/4 ml-5 h-15 text-white font-extrabold"
            >
              <LayoutDashboard /> Performances
            </Button>
          </div>
        </div>
        <div className="w-4/5 h-full ">
          {/* header */}
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/asuLogo.png"
                  width={50}
                  height={60}
                  alt="logoIMG"
                  className="rounded-full"
                />
                <h1 className="text-xl font-extrabold ">Hi, Natnael</h1>
              </div>
              <p className="pl-10 text-xs gray-300">Sunday, june 11, 2025</p>
            </div>
            <div className="flex gap-3 items-center">
              <Input
                type="text"
                placeholder="Search..."
                className="w-60 rounded-full"
              />
              <Settings />
              <Bell />
            </div>
          </div>

          {/* notifications */}
          <div className="shadow-sm mt-5 rounded-md  p-5 flex items-center">
            <div className="flex gap-5 items-center">
              <div>
                <BellRing
                  size={44}
                  strokeWidth={3}
                  className="bg-black text-white p-1 rounded-full"
                />
              </div>
              <div className="w-3/4">
                <h1 className="text-xl font-extrabold">Dear, nati</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae sint nisi ratione? Ipsa optio ipsum, sunt
                  voluptate consectetur dolores nisi corporis ratione officiis
                  praesentium cumque consequuntur. Quis consectetur earum saepe?
                </p>
              </div>
            </div>
            <div>
              <Button className="rounded-full bg-green-400">
                check detail
              </Button>
            </div>
          </div>

          {/* cards */}
          <div className="my-5 flex justify-between">
            {/* card 1 */}
            <div className=" w-1/5  rounded-md p-3 shadow-lg">
              <div className="flex justify-between">
                <div className="text-sm">Active Employees</div>
                <div>
                  <Maximize size={15} />
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <CircleUser /> <div className="text-xl">547</div>
              </div>
            </div>
            {/* card2 */}
            <div className=" w-1/5  rounded-md p-3 shadow-lg">
              <div className="flex justify-between">
                <div className="text-sm">Active Employees</div>
                <div>
                  <Maximize size={15} />
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <CircleUser /> <div className="text-xl">547</div>
              </div>
            </div>
            {/* card 3 */}
            <div className=" w-1/5  rounded-md p-3 shadow-lg">
              <div className="flex justify-between">
                <div className="text-sm">Active Employees</div>
                <div>
                  <Maximize size={15} />
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <CircleUser /> <div className="text-xl">547</div>
              </div>
            </div>
            {/* card4 */}
            <div className=" w-1/5  rounded-md p-3 shadow-lg">
              <div className="flex justify-between">
                <div className="text-sm">Active Employees</div>
                <div>
                  <Maximize size={15} />
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <CircleUser /> <div className="text-xl">547</div>
              </div>
            </div>
          </div>

          {/* inner divions */}
          <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
