"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { postCurriculum } from "@/actions/curriculum.action";

const Curriculum = () => {
  const [department, setDepartment] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleSubmitCurriculum = async () => {
    try {
      const response = await postCurriculum({
        name,
        description,
        year,
        department,
      });
      if (response?.success) {
        alert("Curriculum posted successfully!");
        setName("");
        setDescription("");
        setYear("");
        setDepartment("");
      }
    } catch (e) {
      console.error("Error posting curriculum:", e);
    }
  };

  return (
    <Card className="p-10 w-[40%] ">
      <div className="flex w-full justify-end">
        <Link href="/dashboard/curriculums">
          <Button>Back</Button>
        </Link>
      </div>
      <h1 className="text-lg text-center font-extrabold">Post A course</h1>
      <form className="flex-col flex gap-4" onSubmit={handleSubmitCurriculum}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name of the course</Label>
          <Input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Data Structure and Algorithms"
          />
        </div>
        <Textarea
          placeholder="It is the bedrock of efficient programming and problem-solving. This course will equip you with the fundamental tools and techniques to organize and manipulate data effectively. "
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between ">
          <div>
            <Select onValueChange={(e) => setYear(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Year</SelectLabel>
                  <SelectItem value="1">Fresh</SelectItem>
                  <SelectItem value="2">second year</SelectItem>
                  <SelectItem value="3">third year</SelectItem>
                  <SelectItem value="4">fourth year</SelectItem>
                  <SelectItem value="5">fifth year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={(e) => setDepartment(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Department</SelectLabel>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="is">Information Science</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="phar">Pharmacy</SelectItem>
                  <SelectItem value="law">Law</SelectItem>
                  <SelectItem value="eco">Economics</SelectItem>
                  <SelectItem value="acc">Accounting</SelectItem>
                  <SelectItem value="agro">Agro Economics</SelectItem>
                  <SelectItem value="nurse">Nurse</SelectItem>
                  <SelectItem value="lab">Medical Laboratory</SelectItem>
                  <SelectItem value="journal">Journalism</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default Curriculum;
