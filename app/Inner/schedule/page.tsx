"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const page = () => {
  const [food, setFood] = useState<String>("");
  const [day, setDay] = useState<String>("");
  const [time, setTime] = useState<String>("");

  const handleScheduleSubmit = () => {};

  useEffect(() => {
    console.log(food, day, time);
  }, [food, day, time]);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="p-5">
        <Link href="/dashboard/schedules" className="flex justify-end">
          <Button>Go Back</Button>
        </Link>
        <h1 className="text-center font-bold text-xl">
          Insert the list of Schedules
        </h1>
        <form onSubmit={handleScheduleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="food" className="mb-2">
              food name
            </Label>
            <Input
              placeholder="rise and bread"
              name="food"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="time"> select food time</Label>
            <div className="flex gap-2 items-center">
              <Input
                type="radio"
                name="time"
                className="w-5"
                value="breakfast"
                onChange={(e) => setTime(e.target.value)}
              />
              <p>Breakfast</p>
            </div>
            <div className="flex gap-2 items-center">
              <Input
                type="radio"
                name="time"
                className="w-5"
                value="lunch"
                onChange={(e) => setTime(e.target.value)}
              />
              <p>Lunch</p>
            </div>
            <div className="flex gap-2 items-center">
              <Input
                type="radio"
                name="time"
                className="w-5"
                value="dinner"
                onChange={(e) => setTime(e.target.value)}
              />
              <p>Dinner</p>
            </div>
          </div>

          <div>
            <Select onValueChange={(e) => setDay(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Day" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Days</SelectLabel>
                  <SelectItem value="monday">Monday</SelectItem>
                  <SelectItem value="tuesday">Tuesday</SelectItem>
                  <SelectItem value="wednesday">Wednesday</SelectItem>
                  <SelectItem value="thursday">Thursday</SelectItem>
                  <SelectItem value="friday">Friday</SelectItem>
                  <SelectItem value="saturday">Saturday</SelectItem>
                  <SelectItem value="sunday">Sunday</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default page;
