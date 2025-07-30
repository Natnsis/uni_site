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

const Page = async () => {
  const { success, news } = await fetchNews();
  return (
    <div className="w-screen p-5">
      <div className="flex w-full">
        <SideBar />
        <MiniSidebar />
        <div className="w-4/5 p-5">
          <Header title="News & Updates" />
          <div className="mt-5">
            {success && (news?.length ?? 0) > 0 ? (
              (news ?? []).map((item: any) => (
                <div key={item.id} className="flex-col flex gap-5">
                  <Card className="mb-3 p-3">
                    <div className="w-full flex gap-2">
                      <div className="w-6/8 space-y-3">
                        <h1 className="text-xl font-bold ">{item.title}</h1>
                        <p>{item.content}</p>
                      </div>
                      <div className="w-2/8 flex items-center gap-3 justify-end">
                        {item.published ? (
                          <Button variant="outline">Published</Button>
                        ) : (
                          <Button variant="destructive">Draft</Button>
                        )}
                        <form
                          action={async () => {
                            "use server";
                            await deleteNews(item.id);
                            redirect("/dashboard/news");
                          }}
                          style={{ display: "inline" }}
                        >
                          <Button variant="destructive" type="submit">
                            <Trash />
                          </Button>
                        </form>

                        <Link href={`/dashboard/news/${item.id}/edit`}>
                          <Button variant="secondary">
                            <Pencil />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">No news found.</div>
            )}
          </div>
          <Link href="/Inner/news">
            <Button className="sticky bottom-5 z-50">Create New Post</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
