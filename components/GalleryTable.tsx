"use client";
import { getGallery } from "@/actions/gallery.action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Image from "next/image";

interface GalleryTableInfo {
  id: string;
  caption: string;
  url: string;
  createdAt: string;
}

export function GalleryTable() {
  const [gallery, setGallery] = useState<GalleryTableInfo[]>([]);
  const fetchGallery = async () => {
    try {
      const response = await getGallery();
      if (response.success) {
        setGallery(response.gallery);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <Table>
      <TableCaption>A list of your recent gallery posts</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Content</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gallery.map((items: GalleryTableInfo) => (
          <TableRow key={items?.id}>
            <TableCell className="font-medium">{items?.id}</TableCell>
            <TableCell>
              <Image
                src={items?.imageUrl}
                alt={items?.caption}
                width={100}
                height={100}
              />
            </TableCell>
            <TableCell>{items?.caption}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
