import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type propTypes = {
  title: String;
  value: String;
};

const NumberCard = ({ title, value }: propTypes) => {
  return (
    <div className="px-2 w-full">
      <Card>
        <CardHeader>
          <CardDescription className="text-sm ">{title}</CardDescription>
          <CardTitle className="text-center text-3xl">{value}</CardTitle>
          <CardAction>
            <Button>
              <MoveUpRight />
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
};

export default NumberCard;
