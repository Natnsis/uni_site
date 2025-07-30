"use client";

import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { galleryCount, newsCount } from "@/actions/count.action";
import { Loader2 } from "lucide-react";

const Count = () => {
  const [gallery, setGallery] = useState<null | number>(null);
  const [news, setNews] = useState<null | number>(null);
  const [users, setUsers] = useState<null | number>(0);

  const fetchAllData = async () => {
    const response = await galleryCount();
    const response2 = await newsCount();
    if (response?.success) {
      setGallery(response?.gallery);
    }
    if (response2?.success) {
      setNews(response2?.news);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <div className="flex justify-between w-full gap-5">
      <Card className="w-full text-center">
        <h1>Total News post</h1>
        <p className="font-extrabold text-4xl">
          {news !== null ? news : <Loader2 className="animate-spin mx-auto" />}
        </p>
      </Card>
      <Card className="w-full text-center">
        <h1>Total Gallery</h1>
        <p className="font-extrabold text-4xl">
          {" "}
          {gallery !== null ? (
            gallery
          ) : (
            <Loader2 className="animate-spin mx-auto" />
          )}
        </p>
      </Card>
      <Card className="w-full text-center">
        <h1>Total Users</h1>
        <p className="font-extrabold text-4xl">{users}</p>
      </Card>
    </div>
  );
};

export default Count;
