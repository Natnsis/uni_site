"use client";

import { fetchScheduleById, updateSchedule } from "@/actions/schedule.action";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;

  const [food, setFood] = useState<string>("");

  const getSchedule = async () => {
    const { schedule } = await fetchScheduleById(id);
    setFood(schedule?.food || "");
  };

  useEffect(() => {
    getSchedule();
  }, []);

  const handleScheduleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const food = formData.get("food") as string;

    await updateSchedule(id, { food });
    router.push("/dashboard/schedules");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="p-5 w-full max-w-md">
        <Link href="/dashboard/schedules" className="flex justify-end mb-2">
          <Button>Go Back</Button>
        </Link>
        <h1 className="text-center font-bold text-xl">Update</h1>
        <form onSubmit={handleScheduleUpdate} className="space-y-5">
          <div>
            <Label htmlFor="food" className="mb-2 block">
              Food Name
            </Label>
            <Input
              placeholder="Rice and bread"
              name="food"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default page;
