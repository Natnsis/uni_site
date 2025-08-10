import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getNewsById, updateNews } from "@/actions/news.action";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

// Assuming you have Lucide icons available
import { Check, Edit, Save } from "lucide-react";

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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Edit className="w-8 h-8 text-green-500" />
            Edit News
          </h1>
          <Link
            href="/dashboard/news"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full px-6 py-2 transition-colors duration-200"
          >
            Go Back
          </Link>
        </div>
        <p className="text-gray-600 mb-8">
          Update the title, content, and publication status of this news item.
        </p>

        <form action={handleUpdate} className="space-y-6">
          <Input
            name="title"
            defaultValue={news.title}
            placeholder="Title"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
          <Textarea
            name="content"
            defaultValue={news.content}
            placeholder="Content"
            required
            rows={10}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />

          <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-gray-800">Status:</h2>
            <div className="flex gap-4">
              <label
                htmlFor="published-true"
                className={`flex items-center gap-2 p-3 rounded-full cursor-pointer transition-all duration-200 ${
                  news.published
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "bg-gray-200 text-gray-700 hover:bg-green-50"
                }`}
              >
                <input
                  type="radio"
                  id="published-true"
                  name="published"
                  value="true"
                  defaultChecked={news.published}
                  className="hidden"
                />
                <Check
                  className={`w-4 h-4 transition-transform duration-200 ${
                    news.published
                      ? "scale-100 text-green-500"
                      : "scale-0 text-gray-400"
                  }`}
                />
                <span className="select-none">Publish now</span>
              </label>
              <label
                htmlFor="published-false"
                className={`flex items-center gap-2 p-3 rounded-full cursor-pointer transition-all duration-200 ${
                  !news.published
                    ? "bg-yellow-100 text-yellow-700 font-semibold"
                    : "bg-gray-200 text-gray-700 hover:bg-yellow-50"
                }`}
              >
                <input
                  type="radio"
                  id="published-false"
                  name="published"
                  value="false"
                  defaultChecked={!news.published}
                  className="hidden"
                />
                <Save
                  className={`w-4 h-4 transition-transform duration-200 ${
                    !news.published
                      ? "scale-100 text-yellow-500"
                      : "scale-0 text-gray-400"
                  }`}
                />
                <span className="select-none">Save as draft</span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditNewsPage;
