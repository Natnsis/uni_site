import { Button } from "@/components/ui/button"
import { MoveUpRight } from "lucide-react"

const Counts = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <div className="flex flex-col gap-1 bg-primary text-white p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-sm">Total News</p>
          <Button
            size="icon"
            className="bg-black rounded-full"
          >
            <MoveUpRight />
          </Button>
        </div>
        <h1 className="text-5xl font-bold">
          24
        </h1>
        <p className="text-xs">
          <span className="border rounded-lg px-2 mr-1">
            23
          </span>
          bleh with last month
        </p>
      </div>

      <div className="flex flex-col gap-1 bg-white p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-sm">Active Courses</p>
          <Button
            size="icon"
            className="bg-black rounded-full"
          >
            <MoveUpRight />
          </Button>
        </div>
        <h1 className="text-5xl font-bold">
          10
        </h1>
        <p className="text-xs">
          <span className="border rounded-lg px-2 mr-1">
            23
          </span>
          bleh with last month
        </p>
      </div>

      <div className="flex flex-col gap-1 bg-white p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-sm">Upcoming Deadlines</p>
          <Button
            size="icon"
            className="bg-black rounded-full"
          >
            <MoveUpRight />
          </Button>
        </div>
        <h1 className="text-5xl font-bold">
          50
        </h1>
        <p className="text-xs">
          <span className="border rounded-lg px-2 mr-1">
            23
          </span>
          bleh with last month
        </p>
      </div>

      <div className="flex flex-col gap-1 bg-white p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-sm">Today’s Activity</p>
          <Button
            size="icon"
            className="bg-black rounded-full"
          >
            <MoveUpRight />
          </Button>
        </div>
        <h1 className="text-5xl font-bold">
          120
        </h1>
        <p className="text-xs">
          <span className="border rounded-lg px-2 mr-1">
            23
          </span>
          bleh with last month
        </p>
      </div>
    </div>
  )
}

export default Counts
