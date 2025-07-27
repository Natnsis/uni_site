"use client";

import React, { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Link from "next/link";
import { createNews } from "@/actions/news.action";
import { getUserId } from "@/actions/user.action";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Check } from "lucide-react";

const News = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getUserId();
      setUserId(id ?? null);
    };
    fetchUserId();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setShowAlert(false);
      return;
    }
    await createNews({ title, content, published, authorId: userId });
    setTitle("");
    setContent("");
    setPublished(true);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <Card className="p-10 w-[40%] h-[70%]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex w-full justify-end">
          <Link href="/dashboard/news">
            <Button type="button">Back</Button>
          </Link>
        </div>
        <h1 className="text-lg text-center font-extrabold">Post News</h1>
        <Input
          type="text"
          placeholder="exit exam.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="The exit exam will be this month within 10 days"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="text-sm">
          <div className="flex gap-4">
            <input
              type="radio"
              name="publish"
              value="true"
              id="publish"
              checked={published}
              onChange={() => setPublished(true)}
            />
            <label htmlFor="publish">Publish now</label>
          </div>
          <div className="flex gap-4">
            <input
              type="radio"
              name="publish"
              value="false"
              id="draft"
              checked={!published}
              onChange={() => setPublished(false)}
            />
            <label htmlFor="draft">Save as draft</label>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      {showAlert && (
        <Alert variant="default" className="mb-4">
          <Check />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            You have posted news successfully!
          </AlertDescription>
        </Alert>
      )}
    </Card>
  );
};

export default News;
