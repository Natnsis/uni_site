import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const Curriculum = () => {
  return (
    <Card className="p-10 w-[40%] h-[70%]">
      <div className="flex w-full justify-end">
        <Link href="/dashboard/curriculum">
          <Button>Back</Button>
        </Link>
      </div>
      <h1 className="text-lg text-center font-extrabold">Post A Department</h1>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name of the department</Label>
        <Input type="text" id="name" placeholder="Computer Science" />
      </div>

      <Textarea placeholder="The exit exam will be this month within 10 days" />
      <div className="text-sm">
        <div className="flex gap-4">
          <input type="radio" name="publish" value="true" id="publish" />
          <label htmlFor="publish">Publish now</label>
        </div>
        <div className="flex gap-4">
          <input type="radio" name="publish" value="true" id="draft" />
          <label htmlFor="draft">Save as draft</label>
        </div>
      </div>
      <Button>Submit</Button>
    </Card>
  );
};

export default Curriculum;
