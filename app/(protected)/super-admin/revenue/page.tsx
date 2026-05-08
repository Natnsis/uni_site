"use client"
import { ChartAreaDefault } from "@/components/RevenueChart"
import { Button } from "@/components/ui/button"
import { CalendarDotsIcon, DotsThreeIcon, SpinnerIcon, TimerIcon } from "@phosphor-icons/react"

const Revenue = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-3 gap-5 h-[85vh] overflow-hidden">
        <div className="col-span-2 p-5">
          <div className="flex gap-5 w-full">
            <div className="bg-secondary h-52 w-full p-3">
              <div className="flex justify-between">
                <h1 className="text-sm font-semibold">Total Income</h1> 
                <Button variant='outline'><SpinnerIcon size={32} /></Button>
              </div>
              <div className="h-[80%] p-5 flex items-center justify-center">
                <p className="font-semibold text-3xl text-center">4234 Birr</p>
              </div>
            </div>

            <div className="w-full rounded-xl flex flex-col gap-5">
              <div className="h-full flex gap-5">
                <div className="h-full w-full bg-secondary p-3 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h1 className="h-25">Prioratized tasks</h1>
                    <TimerIcon size={20} />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">83%</h1>
                    <p>Avg. Completed</p>
                  </div>
                </div>

                <div className="h-full w-full bg-secondary p-3 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h1 className="h-25">Prioratized tasks</h1>
                    <TimerIcon size={20} />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">83%</h1>
                    <p>Avg. Completed</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-secondary flex justify-between">
                <div>
                  <h1>Trackers connected</h1>
                  <p className="font-light">3 active connections</p>
                </div>
                <Button><DotsThreeIcon size={20} /></Button>
              </div>
            </div>
          </div>
          <div className="h-[45vh] mt-5">
            <ChartAreaDefault />
          </div>
        </div>

        <div className="col-span-1 p-5 border-l">
          <div className="flex justify-between">
            <h1>New Payments</h1>
            <CalendarDotsIcon size={20} />
          </div>
          <div className="mt-3 h-[90%]">
            i got this....
          </div>
        </div>
      </div>
    </div>
  )
}

export default Revenue 
