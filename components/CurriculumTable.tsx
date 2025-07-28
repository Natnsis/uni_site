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
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { deleteCurriculum, getCurriculum } from "@/actions/curriculum.action";

interface curriculumItem {
  id: string;
  createdAt: Date;
  name: string;
  description: string;
  department: string;
  year: string;
}
interface Curriculum {
  success: boolean;
  curriculum: curriculumItem[];
}

export function CurriculumTable() {
  const [curriculum, setCurriculum] = useState<curriculumItem[]>([]);
  const fetchData = async () => {
    try {
      const response = await getCurriculum();
      if (response?.success) {
        setCurriculum(response.curriculum);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Table>
      <TableCaption>A list of your recent curriculum entries.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Courses</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Year</TableHead>
          <TableHead className="text-right pr-10">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {curriculum.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.department}</TableCell>
            <TableCell>{item.year}</TableCell>
            <TableCell className="flex gap-4 justify-end">
              <Button variant="destructive" onClick={deleteCurriculum(item.id)}>
                Delete
              </Button>
              <Button>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
