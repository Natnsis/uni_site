'use client'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { useState } from 'react'

const page = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div
        className="bg-secondary p-5 rounded-lg w-[90%]"
      >
        <h1 className="font-bold text-lg">
          Post News
        </h1>
        <div className="flex gap-5">
          <div className="w-full bg-white p-3 rounded  mt-2 rounded-lg">
            <div>
              <Label className="text-sm mb-1">
                Title
              </Label>
              <Input className="w-50" />

              <Label className="text-sm mb-1 mt-3">
                Description
              </Label>
              <Textarea className="w-full h-40" />
            </div>
          </div>

          <div className="w-full bg-white p-3 rounded  mt-2 rounded-lg">
            <div>
              <Label className="text-sm mb-1">
                Category
              </Label>
              < Select >
                <SelectTrigger className="w-[180px]" >
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                < SelectContent >
                  <SelectGroup>
                    <SelectItem value="light" > Light </SelectItem>
                    < SelectItem value="dark" > Dark </SelectItem>
                    < SelectItem value="system" > System </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-5">
              <Label className="text-sm mb-1">
                Status
              </Label>
              < Select >
                <SelectTrigger className="w-[180px]" >
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                < SelectContent >
                  <SelectGroup>
                    <SelectItem value="light" > Light </SelectItem>
                    < SelectItem value="dark" > Dark </SelectItem>
                    < SelectItem value="system" > System </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full bg-white p-3 rounded  mt-2 rounded-lg flex items-center justify-center">
            image
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="destructive">Cancel</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </section>
  )
}

export default page
