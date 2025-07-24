import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

type newsItem = {
  title: String;
  postedBy: String;
  description?: String | null | undefined;
  isPublished: Boolean;
};

const page = () => {
  const News: newsItem[] = [
    {
      title: "spring semester registration open",
      postedBy: "john doe",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isPublished: true,
    },
    {
      title: "spring semester registration open",
      postedBy: "john doe",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isPublished: true,
    },
    {
      title: "spring semester registration open",
      postedBy: "john doe",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isPublished: false,
    },
  ];
  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <div className="w-4/5 p-5">
          <Header title="News & Updates" />
          <div className="mt-5">
            {News.map((item: newsItem, index: number) => (
              <div key={index} className="flex-col flex gap-5">
                <Card className="mb-3 p-3">
                  <div className="w-full flex gap-2">
                    <div className="w-6/8 space-y-3">
                      <h1 className="text-xl font-bold ">{item.title}</h1>
                      <h2 className="text-xs text-gray-600">
                        Posted by: {item.postedBy}
                      </h2>
                      <p>{item.description}</p>
                    </div>
                    <div className="w-2/8 flex items-center gap-3 justify-end">
                      {" "}
                      {item.isPublished ? (
                        <Button variant="outline">Published</Button>
                      ) : (
                        <Button variant="destructive">draft</Button>
                      )}
                      <Button variant="secondary">
                        <Trash />
                      </Button>
                      <Button variant="secondary">
                        <Pencil />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <Link href="/Inner/news">
            <Button className="sticky bottom-5 z-50">Create New Post</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
