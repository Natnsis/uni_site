"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CafeTable() {
  return (
    <Table>
      <TableCaption>Current cafeteria schedule shown to students</TableCaption>
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
          <TableCell>firfir</TableCell>
          <TableCell>shiro</TableCell>
          <TableCell>misir</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Monday</TableCell>
          <TableCell>firfir</TableCell>
          <TableCell>shiro</TableCell>
          <TableCell>misir</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Monday</TableCell>
          <TableCell>firfir</TableCell>
          <TableCell>shiro</TableCell>
          <TableCell>misir</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Monday</TableCell>
          <TableCell>firfir</TableCell>
          <TableCell>shiro</TableCell>
          <TableCell>misir</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Monday</TableCell>
          <TableCell>firfir</TableCell>
          <TableCell>shiro</TableCell>
          <TableCell>misir</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Monday</TableCell>
          <TableCell>firfir</TableCell>
          <TableCell>shiro</TableCell>
          <TableCell>misir</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="capitalize">Monday</TableCell>
          <TableCell>firfir</TableCell>
          <TableCell>shiro</TableCell>
          <TableCell>misir</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
