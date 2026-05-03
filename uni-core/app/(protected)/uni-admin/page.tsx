'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UniBarchart } from "@/components/UniBarchart";
import { ArrowUpIcon, CaretRightIcon, CheckCircleIcon, MagnifyingGlassIcon, SpinnerIcon, TrendUpIcon, WarningIcon } from "@phosphor-icons/react";

const Dashboard = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl">Welcome back, Jack 👋</h1>
          <p className="text-gray-600 text-sm">Assosa University - Admin portal</p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex border-2 items-center px-3">
            <Input className="border-none focus:ring-0 outline-none focus-visible:ring-0" />
            <MagnifyingGlassIcon />
          </div>
          <Button>Add a Manager</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        <div className="h-35 w-full border flex flex-col justify-between p-5">
          <p className="text-sm font-light">Total Enrollment</p>
          <h1 className="text-4xl font-bold">12,482</h1>
          <div className="flex gap-2 items-center text-green-400 text-sm">
            <TrendUpIcon /> <p>+8.4% from last sem</p>
          </div>
        </div>

        <div className="h-35 w-full border flex flex-col justify-between p-5">
          <p className="text-sm font-light">Avg.Attendance</p>
          <h1 className="text-4xl font-bold">94.2%</h1>
          <div className="flex gap-2 items-center text-indigo-400 text-sm">
            <CheckCircleIcon /> <p>Stable Prformance</p>
          </div>
        </div>

        <div className="h-35 w-full border flex flex-col justify-between p-5">
          <p className="text-sm font-light">Research Output</p>
          <h1 className="text-4xl font-bold">342</h1>
          <div className="flex gap-2 items-center text-green-400 text-sm">
            <ArrowUpIcon /> <p>12 new publication</p>
          </div>
        </div>

        <div className="h-35 w-full border flex flex-col justify-between p-5">
          <p className="text-sm font-light">Financial Health</p>
          <h1 className="text-4xl font-bold">$4.2M</h1>
          <div className="flex gap-2 items-center text-brown-200 text-sm">
            <WarningIcon /> <p>Grand renewals pending</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 h-[60vh] mt-5 gap-5">
        <div className="col-span-3 h-full">
          <div className="h-full gap-5 flex-col flex">
            <div className="h-[45%] border p-5">
              <h1 className="text-xl font-bold">Package Details</h1>
              <p className="font-light text-sm">Electronics | In progress</p>
              <div className="flex justify-between px-5 mt-5">
                <div>
                  <h1>24</h1>
                  <p className="text-xs">Complaints</p>
                </div>

                <div>
                  <h1>24</h1>
                  <p className="text-xs">Complaints</p>
                </div>

                <div>
                  <h1>24</h1>
                  <p className="text-xs">Complaints</p>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <Button>Broadcast</Button>
              </div>
            </div>

            <div className="h-[45%] border">
              <UniBarchart />
            </div>
          </div>
        </div>

        <div className="col-span-4 h-full">
          <div className="h-full gap-5 flex-col flex">
            <div className="h-[65%] border p-5 flex flex-col justify-between">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">Order Info</h1>
                <Button variant='link'>View More <CaretRightIcon /></Button>
              </div>
              <div className="flex gap-5 mt-5">
                <Card className="p-5 w-full h-[30vh]"></Card>
                <div className="border p-5 w-full"></div>
              </div>
              <div className="flex gap-3 justify-center text-xs items-center mt-5">
                <div className="flex gap-2 items-center pr-5 border-r">
                  <SpinnerIcon size={25} />
                  <h1>60% Completed</h1>
                </div>
                <p>Overall bulshit overtime</p>
              </div>
            </div>
            <div className="h-[25%] border bg-[url('/unicard.png')] bg-cover bg-center bg-no-repeat">
              hehe2
            </div>
          </div>
        </div>

        <div className="col-span-3 h-full border">
        </div>
      </div>
    </div>
  )
}

export default Dashboard 
