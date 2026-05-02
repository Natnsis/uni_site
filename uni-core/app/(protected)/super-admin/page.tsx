'use client'
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CalendarBlankIcon, MicrophoneIcon } from "@phosphor-icons/react"
import { Separator } from "@/components/ui/separator"

const page = () => {
  return (
    <div className="px-10">
      <div className="flex justify-between items-center mx-10">
        <div className="flex gap-3 items-center">
          <p className="p-5 rounded-full border">19</p>
          <div className="text-sm py-5">
            <p>Tue</p>
            <p>December</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-5">
            <Button>Show my Tasks <ArrowRightIcon /></Button>
            <Button size='icon'><CalendarBlankIcon /></Button>
          </div>
        </div>

        <div className="flex items-center gap-10 my-10">
          <div>
            <h1 className="text-4xl">Hey, Need help? 👋</h1>
            <p className="text-4xl text-gray-500">Just ask me anything!</p>
          </div>
          <Button variant='outline'><MicrophoneIcon /></Button>
        </div>
      </div>
    </div>
  )
}

export default page
