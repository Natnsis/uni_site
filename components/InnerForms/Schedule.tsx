import React from "react";
import { Card } from "../ui/card";
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

const Schedule = () => {
  return (
    <div className="p-10 w-[80%] h-screen">
      <div className="flex w-full justify-end">
        <Link href="/dashboard/schedules">
          <Button>Back</Button>
        </Link>
      </div>
      <h1 className="text-lg text-center font-extrabold">
        Post Cafeteria Schedule
      </h1>
      <div>
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
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Tuesday</TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Wednesday</TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Thursday</TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Friday</TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Saturday</TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">Sunday</TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
              <TableCell>
                <Input placeholder="firfir/bread" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Button className="w-full mt-5">Submit</Button>
    </div>
  );
};

export default Schedule;
