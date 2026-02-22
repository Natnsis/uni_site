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
  const [fileName, setFileName] = useState("No file chosen");
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div
        className="bg-secondary p-5 rounded-lg w-[90%]"
      >
        <h1 className="font-bold text-lg">
          Post News
        </h1>
        <div className="w-full bg-white p-3 rounded  mt-2 rounded-lg">
          <div>
            <Label className="">
              Title
            </Label>
            <Input />

            <Label className="mt-5">
              Description
            </Label>
            <Textarea />
            <div className="mt-5 flex gap-5">
              <div>
                <Label>Post category</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Post category</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Label className="mt-5">
              Image
            </Label>
            <div>
              <Label
                htmlFor="picture"
                className="mt-1 p-2 rounded-lg bg-primary w-fit text-white"
              >
                Upload Image
              </Label>
              <Input
                type="file"
                id="picture" className="hidden"
                onChange={handleFileChange}
              />
              <span className="text-sm text-gray-600">{fileName}</span>
            </div>
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
