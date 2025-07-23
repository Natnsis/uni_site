import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const GalleryForm = () => {
  return (
    <div>
      <Card className="px-10">
        <h1 className="text-center font-bold text-xl">
          Gallery Insertion Form
        </h1>

        <div className="grid w-full gap-3">
          <Label htmlFor="message">Add Caption </Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <div className="flex gap-5 ">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="flex items-end">
            <Button>Post</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GalleryForm;
