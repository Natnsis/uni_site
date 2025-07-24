import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getNewsById, updateNews } from "@/actions/news.action";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

const EditNewsPage = async ({ params }: { params: { id: string } }) => {
  const { news } = await getNewsById(params.id);

  if (!news) return notFound();
  async function handleUpdate(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const published = formData.get("published") === "true";
    await updateNews(params.id, { title, content, published });
    redirect("/dashboard/news");
  }
  return (
    <form action={handleUpdate} className="space-y-4 max-w-xl mx-auto mt-10">
      <div className="flex w-full justify-end">
        <Link href="/dashboard/news">
          <Button type="button" variant="secondary">
            Go Back
          </Button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Edit News</h1>
      <Input
        name="title"
        defaultValue={news.title}
        placeholder="Title"
        required
      />
      <Textarea
        name="content"
        defaultValue={news.content}
        placeholder="Content"
        required
      />
      <div className="flex gap-4">
        <label>
          <input
            type="radio"
            name="published"
            value="true"
            defaultChecked={news.published}
          />{" "}
          Publish now
        </label>
        <label>
          <input
            type="radio"
            name="published"
            value="false"
            defaultChecked={!news.published}
          />{" "}
          Save as draft
        </label>
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
};

export default EditNewsPage;
