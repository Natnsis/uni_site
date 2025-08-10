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
    <Card className="p-10 w-full max-w-md mx-auto h-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-extrabold text-center flex-1">
            Post News
          </h1>
          <Link href="/dashboard/news" className="ml-auto">
            <Button type="button" variant="outline" size="sm">
              Back
            </Button>
          </Link>
        </div>

        <Input
          type="text"
          placeholder="Exit exam..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="text-gray-900"
        />

        <Textarea
          placeholder="The exit exam will be this month within 10 days."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="text-gray-900"
          rows={5}
        />

        <fieldset className="flex flex-col gap-3 text-sm">
          <legend className="font-semibold">Publication status</legend>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="publish"
              value="true"
              checked={published}
              onChange={() => setPublished(true)}
              className="cursor-pointer"
            />
            Publish now
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="publish"
              value="false"
              checked={!published}
              onChange={() => setPublished(false)}
              className="cursor-pointer"
            />
            Save as draft
          </label>
        </fieldset>

        <Button type="submit" className="mt-4" size="lg">
          Submit
        </Button>
      </form>

      {showAlert && (
        <Alert variant="default" className="mt-6 flex items-center gap-3">
          <Check className="w-5 h-5 text-green-600" />
          <div>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              You have posted news successfully!
            </AlertDescription>
          </div>
        </Alert>
      )}
    </Card>
  );
};

export default News;
