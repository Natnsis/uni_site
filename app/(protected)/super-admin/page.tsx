'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowBendRightDownIcon, ArrowRightIcon, CalendarBlankIcon, ChartLineIcon, ChartLineUpIcon, ClockIcon, LockIcon, MicrophoneIcon, PenIcon, PlusIcon, ShareNetworkIcon } from "@phosphor-icons/react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SuperTooltip } from "@/components/SuperTooltip"
import { SuperRadar } from "@/components/SuperRadar"

const page = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="p-5 rounded-full border">19</p>
          <div className="text-sm py-5 border-r px-5 mr-5">
            <p>Tue</p>
            <p>December</p>
          </div>

          <div className="flex items-center gap-5">
            <Button>Show my Tasks <ArrowRightIcon /></Button>
            <Button size='icon'><CalendarBlankIcon /></Button>
          </div>
        </div>

        <div className="flex items-center gap-10 my-10">
          <div>
            <h1 className="text-4xl">Hey, Need help? 👋</h1>
            <p className="text-4xl text-gray-500">Just ask me anything!</p>
          </div>
          <Button variant='ghost' size='lg'><MicrophoneIcon /></Button>
        </div>
      </div>

      <div className="h-[30vh] grid grid-cols-15 gap-10">
        <div className="col-span-1 h-full flex flex-col gap-5">
          <Button className='flex-1' variant='outline'>
            <PlusIcon />
          </Button>
          <Button variant='outline'>
            <ShareNetworkIcon />
          </Button>
        </div>

        <div className="col-span-4 border h-full">
          <div className="h-3/4 pt-5 px-5">
            <div className="flex justify-between">
              <p>Visa</p>
              <Badge>Direct Depits</Badge>
            </div>
            <div className="mt-5 flex flex-col gap-1">
              <p className="text-sm">Linked to main account</p>
              <h1 className="font-bold">****753</h1>
              <div className="flex gap-5">
                <Button variant='outline'>Receive</Button>
                <Button>Send</Button>
              </div>
            </div>

          </div>
          <div className="h-1/4 bg-secondary px-3 py-1">
            <div className="flex justify-between items-center">
              <div className="text-xs">
                <p>Monthly regular fee</p>
                <h1>$25.00</h1>
              </div>
              <div className="flex text-sm items-center gap-3">
                <PenIcon />
                <p>Edit cards limitation</p>
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-4 border h-full">
          <div className="px-5 pt-2 h-1/2">
            <div className="flex justify-between ">
              <Button variant='outline'>
                <ArrowBendRightDownIcon />
              </Button>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-5">
              <p className="text-xs font-light">Total income</p>
              <h1 className="text-xl">$23,184.40</h1>
            </div>
          </div>

          <div className="h-1/2 bg-secondary px-5 pt-2">
            <div className="flex justify-between ">
              <Button variant='outline'>
                <ArrowBendRightDownIcon />
              </Button>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-5">
              <p className="text-xs font-light">Total income</p>
              <h1 className="text-xl">$23,184.40</h1>
            </div>
          </div>
        </div>

        <div className="col-span-2 h-full">
          <div className="flex flex-col items-center h-full">
            <div className="flex flex-col gap-5 h-1/2 w-3/4 mb-2">
              <Button className='flex flex-col items-center justify-center h-full rounded-full'>
                <LockIcon />
                <p>System Lock</p>
              </Button>
            </div>

            <div className="flex flex-col gap-5 h-1/2">
              <Button variant='outline' className='flex flex-col items-center justify-center h-full rounded-full px-5'>
                <div className="flex">
                  <h1 className="text-xl">36%</h1>
                </div>
                <p>Growth Rate</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-4 h-full">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="border p-5 w-full">
                <ClockIcon size={20} />
                <div>
                  <h1 className="text-2xl font-bold">13 Days</h1>
                  <p className="text-xs">109hours, 23minutes</p>
                </div>
              </div>

              <div className="border p-5 w-full">
                <div className="grid grid-cols-2 gap-3">
                  <Badge>2022</Badge>
                  <Badge>2023</Badge>
                  <Badge>2024</Badge>
                  <Badge>2025</Badge>
                  <Badge>2026</Badge>
                </div>
              </div>
            </div>
            <div className="border p-5">
              hehe
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="mt-10 w-[50vw] h-[10vh]">
          <SuperTooltip />
        </div>
        <div className="mt-10 w-[40vw] h-[10vh]">
          <SuperRadar />
        </div>
      </div>
    </div>
  )
}

export default page
