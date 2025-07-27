import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const Schedule = async () => {
  return (
    <div className="p-10 w-[80%] h-screen">
      <div className="flex w-full justify-end">
        <Link href="/dashboard/schedules">
          <Button>Back</Button>
        </Link>
      </div>
      <h1 className="text-lg text-center font-extrabold">
        Press the food you want to change
      </h1>
      <div className="mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Days</TableHead>
              <TableHead>Breakfast</TableHead>
              <TableHead>Lunch</TableHead>
              <TableHead>Dinner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Monday</TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Tuesday</TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Wednesday</TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Thursday</TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Friday</TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Saturday</TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Sunday</TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
              <TableCell className="text-start">
                <Button variant="secondary" className="">
                  firfir/bread
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Schedule;
