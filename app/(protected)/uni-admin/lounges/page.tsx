'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon } from "@phosphor-icons/react"

const page = () => {
  return (
    <div className="px-5">
      <header className="flex justify-between">
        <div className="flex gap-1 items-center">
          <h1 className="text-sm">Search: </h1>
          <Input className="border-2 w-[30vw]" />
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-sm">Filters: </p>
          <div className="flex gap-5">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='Active'>Student</SelectItem>
                  <SelectItem value='Inactive'>Food</SelectItem>
                  <SelectItem value='Pending'>Rest</SelectItem>
                  <SelectItem value='Pending'>Study</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='Active'>Student</SelectItem>
                  <SelectItem value='Inactive'>Food</SelectItem>
                  <SelectItem value='Pending'>Rest</SelectItem>
                  <SelectItem value='Pending'>Study</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='Active'>Student</SelectItem>
                  <SelectItem value='Inactive'>Food</SelectItem>
                  <SelectItem value='Pending'>Rest</SelectItem>
                  <SelectItem value='Pending'>Study</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
            
          <Button>
            <PlusIcon/>
            Add New Lounge
          </Button>
        </div>
      </header>

      <div className="mt-5 grid grid-cols-4 gap-5">
        <div className="border w-full">
          <div className="w-full">
            <img src='/login.jpg' className="w-full h-[50vh]" />
          </div>
        </div>
        <div className="border w-full">
          <div className="w-full">
            <img src='/login.jpg' className="w-full h-[50vh]" />
          </div>
        </div><div className="border w-full">
          <div className="w-full">
            <img src='/login.jpg' className="w-full h-[50vh]" />
          </div>
        </div><div className="border w-full">
          <div className="w-full">
            <img src='/login.jpg' className="w-full h-[50vh]" />
          </div>
        </div><div className="border w-full">
          <div className="w-full">
            <img src='/login.jpg' className="w-full h-[50vh]" />
          </div>
        </div><div className="border w-full">
          <div className="w-full">
            <img src='/login.jpg' className="w-full h-[50vh]" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default page
