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

interface NewsItem {
  id: string;
  title: string;
  content: string;
  published: boolean;
}

const Page = async () => {
  const { success, news } = await fetchNews();

  return (
    <div className="flex w-screen min-h-screen bg-gray-50">
      <SideBar />
      <MiniSidebar />

      <main className="flex-1 p-6 md:p-10 lg:pl-0 flex flex-col">
        <Header title="News & Updates" />

        <div className="mt-6 flex justify-end">
          <Link href="/Inner/news" passHref>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
              Create New Post
            </Button>
          </Link>
        </div>

        <section className="mt-8 flex-1 overflow-auto">
          {success && news && news.length > 0 ? (
            news.map((item: NewsItem) => (
              <Card
                key={item.id}
                className="mb-5 p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl"
              >
                <div className="flex-1 mb-5 md:mb-0 space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.content}</p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {item.published ? (
                    <Button
                      variant="outline"
                      className="bg-green-100 text-green-700 font-semibold cursor-default"
                      disabled
                    >
                      Published
                    </Button>
                  ) : (
                    <Button
                      variant="destructive"
                      className="bg-yellow-100 text-yellow-700 font-semibold cursor-default"
                      disabled
                    >
                      Draft
                    </Button>
                  )}

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
                      aria-label="Delete news"
                    >
                      <Trash className="w-5 h-5" />
                    </Button>
                  </form>

                  <Link href={`/dashboard/news/${item.id}`} passHref>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                      aria-label="Edit news"
                    >
                      <Pencil className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg mt-24">
              No news found.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Page;
