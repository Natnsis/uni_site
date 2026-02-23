import { Button } from "@/components/ui/button"
import { Bell, Mail } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Counts from "@/components/Counts"
import Anlytics from "@/components/Anlytics"

const page = () => {
  return (
    <main className="h-screen p-5">
      <div className="flex justify-between bg-secondary p-3 rounded-lg">
        <div className="flex items-center">
          <p className="text-sm">
            Welcome to <span className="text-lg font-bold text-primary">StudySphare</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant='outline'
            size='icon'>
            <Bell />
          </Button>

          <Button
            variant='outline'
            size='icon'>
            <Mail />
          </Button>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold text-primary">Natnael Sisay</p>
              <p className="text-sm text-gray-500">nsisay49@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-secondary py-5 px-2 rounded-lg">
        <h1 className="text-4xl">Dashboard</h1>
        <p className="text-sm w-1/2 text-gray-500">
          Monitor campus operations and academic performance from one centralized control panel.
        </p>
        <Counts />
        <Anlytics />
      </div>
    </main>
  )
}

export default page
