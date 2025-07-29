"use client";

import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { galleryCount, newsCount } from "@/actions/count.action";

const Count = () => {
  const [gallery, setGallery] = useState(0);
  const [news, setNews] = useState(0);
  const [users, setUsers] = useState(0);

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
        <p className="font-extrabold text-4xl">{gallery}</p>
      </Card>
      <Card className="w-full text-center">
        <h1>Total Gallery</h1>
        <p className="font-extrabold text-4xl">{news}</p>
      </Card>
      <Card className="w-full text-center">
        <h1>Total Users</h1>
        <p className="font-extrabold text-4xl">{users}</p>
      </Card>
    </div>
  );
};

export default Count;
