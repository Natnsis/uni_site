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
import { useRouter } from "next/navigation";

interface CurriculumItem {
  id: string;
  createdAt: Date;
  name: string;
  description: string;
  department: string;
  year: string;
}

export function CurriculumTable() {
  const [curriculum, setCurriculum] = useState<CurriculumItem[]>([]);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await getCurriculum();
      if (response?.success) {
        setCurriculum(response.curriculum);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = async (id: string) => {
    const response = await deleteCurriculum(id);
    if (response?.success) {
      alert("Deleted successfully");
      router.refresh();
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full border border-gray-300 border-collapse">
        <TableCaption className="text-sm text-gray-600 py-3">
          A list of your recent curriculum entries.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="border border-gray-300 px-4 py-3 text-left">
              Courses
            </TableHead>
            <TableHead className="border border-gray-300 px-4 py-3 text-left">
              Department
            </TableHead>
            <TableHead className="border border-gray-300 px-4 py-3 text-left w-24">
              Year
            </TableHead>
            <TableHead className="border border-gray-300 px-4 py-3 text-right pr-10 w-36">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {curriculum.map((item) => (
            <TableRow key={item.id} className="even:bg-white odd:bg-gray-50">
              <TableCell className="border border-gray-300 px-4 py-3 whitespace-normal">
                {item.name}
              </TableCell>
              <TableCell className="border border-gray-300 px-4 py-3 whitespace-normal">
                {item.department}
              </TableCell>
              <TableCell className="border border-gray-300 px-4 py-3 text-left">
                {item.year}
              </TableCell>
              <TableCell className="border border-gray-300 px-4 py-3 flex gap-3 justify-end">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </Button>
                <Button size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
