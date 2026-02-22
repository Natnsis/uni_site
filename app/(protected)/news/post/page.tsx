'use client'

import { useState, useEffect, ChangeEvent } from "react";
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
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      return;
    }

    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="bg-secondary p-5 rounded-lg w-[90%]">
        <h1 className="font-bold text-lg">Post News</h1>

        <div className="flex gap-5">
          <div className="w-full bg-white p-4 rounded-lg mt-2">
            <Label className="text-sm mb-1 block">Title</Label>
            <Input className="w-full" />

            <Label className="text-sm mb-1 mt-4 block">
              Description
            </Label>
            <Textarea className="w-full h-40" />
          </div>

          <div className="w-full bg-white p-4 rounded-lg mt-2">
            <Label className="text-sm mb-1 block">Category</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="announcement">
                    Announcement
                  </SelectItem>
                  <SelectItem value="event">
                    Event
                  </SelectItem>
                  <SelectItem value="update">
                    Update
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Label className="text-sm mb-1 mt-5 block">Status</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">
                    Published
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full bg-white p-4 rounded-lg mt-2 flex items-center justify-center">
            <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition">

              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />

              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="preview"
                    className="w-40 h-40 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-600 truncate max-w-[180px] text-center">
                    {file?.name}
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    Upload Image
                  </div>
                  <p className="text-sm">Click to select image</p>
                </div>
              )}
            </label>
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <Button variant="destructive">Cancel</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </section>
  );
}
