import Calendar from "@/components/Calendar"
import { Button } from "@/components/ui/button"
import { BrushCleaning } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const page = () => {
  return (
    <main className="h-screen p-5 flex flex-col">
      <h1 className="font-bold text-2xl">Cafeteria schedule</h1>
      <p className="text-sm text-gray-400">
        Stay updated with daily meals,
        serving times, and special menus all in one place.
      </p>
      <div>
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>
                <BrushCleaning />
                Clear
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                  This will permanently remove all the saved cafeteria schedule.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Calendar />
      </div>
    </main>
  )
}

export default page
