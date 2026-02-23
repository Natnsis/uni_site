"use client"
import { Button } from "@/components/ui/button";
import { ListFilterPlus } from 'lucide-react';
import { useRouter } from "next/navigation";

const NewsFilter = () => {
  const router = useRouter()
  return (
    <div className="flex justify-between items-center">
      <div className="bg-secondary w-fit mt-5 py-1 rounded-lg flex gap-3 px-2">
        <Button size="sm" className="text-xs" variant="outline">All</Button>
        <Button size="sm" className="text-xs" variant="ghost">last week</Button>
        <Button size="sm" className="text-xs" variant="ghost">last month</Button>
      </div>
      <div>
        <Button onClick={() => router.push('/news/post')}>
          <ListFilterPlus />
          Post
        </Button>
      </div>
    </div>
  )
}

export default NewsFilter
