import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { fetchNews, deleteNews } from "@/actions/news.action";
import { redirect } from "next/navigation";
import { MiniSidebar } from "@/components/MIniSidebar";

// Defining an explicit type for the news items improves type safety
// and code clarity.
interface NewsItem {
  id: string;
  title: string;
  content: string;
  published: boolean;
}

const Page = async () => {
  // We can now assume `news` will be an array of `NewsItem` or null/undefined
  const { success, news } = await fetchNews();

  return (
    <div className="flex w-screen min-h-screen bg-gray-50">
      <SideBar />
      <MiniSidebar />

      <div className="flex-1 p-5 md:p-10 lg:pl-0 flex flex-col">
        <Header title="News & Updates" />

        <div className="mt-6 w-full flex justify-end">
          <Link href="/Inner/news">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Create New Post
            </Button>
          </Link>
        </div>

        {/* News List Section */}
        <div className="mt-5 flex-1">
          {/* We've added a type guard here to ensure news is not null or undefined */}
          {success && (news?.length ?? 0) > 0 ? (
            // The map function now uses the `NewsItem` type
            (news as NewsItem[]).map((item) => (
              <Card
                key={item.id}
                className="mb-4 p-5 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl"
              >
                <div className="flex-1 space-y-2 mb-4 md:mb-0">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h1>
                  <p className="text-gray-600">{item.content}</p>
                </div>

                <div className="flex items-center gap-2">
                  {item.published ? (
                    <Button
                      variant="outline"
                      className="bg-green-100 text-green-700 font-semibold"
                    >
                      Published
                    </Button>
                  ) : (
                    <Button
                      variant="destructive"
                      className="bg-yellow-100 text-yellow-700 font-semibold"
                    >
                      Draft
                    </Button>
                  )}

                  {/* Delete Form */}
                  <form
                    action={async () => {
                      "use server";
                      await deleteNews(item.id);
                      redirect("/dashboard/news");
                    }}
                    style={{ display: "inline" }}
                  >
                    <Button
                      variant="destructive"
                      type="submit"
                      size="icon"
                      className="bg-red-500 hover:bg-red-600"
                    >
                      <Trash className="w-5 h-5" />
                    </Button>
                  </form>

                  {/* Edit Button with Link */}
                  <Link href={`/dashboard/news/${item.id}`}>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <Pencil className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-20">
              No news found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
