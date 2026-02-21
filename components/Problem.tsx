import { Split, Signal, EyeOff } from "lucide-react"

const Problem = () => {
  return (
    <section className="px-20">
      <h1 className="text-5xl w-4/5 mb-5">
        Universities Are Managing Students With <span className="text-primary">Fragmented Systems.</span>
      </h1>
      <p className="w-4/5 mb-5">
        Timetables in one system. Grades in another. Announcements buried in emails.
        Students and administrators waste hours switching between platforms that don’t communicate.
      </p>
      <div className="flex gap-5">
        <div className="bg-secondary w-full hover:bg-primary p-5 hover:text-white">
          <div className="h-25 ">
            <Split size={70} />
          </div>
          <h1 className="text-3xl font-bold">Fragmented Systems</h1>
          <p className="mt-5">Grades, schedules, announcements, and communication tools are spread across multiple platforms. This fragmentation creates confusion and wastes valuable time.</p>
        </div>

        <div className="bg-secondary w-full hover:bg-primary p-5 hover:text-white">
          <div className="h-25 ">
            <Signal size={70} />
          </div>
          <h1 className="text-3xl font-bold">Poor Communication Flow</h1>
          <p className="mt-5">Important updates are buried in emails or lost in messaging apps. Students miss deadlines, and administrators struggle to ensure consistent engagement.</p>
        </div>

        <div className="bg-secondary w-full hover:bg-primary p-5 hover:text-white">
          <div className="h-25 ">
            <EyeOff size={70} />
          </div>
          <h1 className="text-3xl font-bold">Limited Academic Visibility</h1>
          <p className="mt-5">Students often have no centralized way to monitor GPA progress, upcoming deadlines, or performance trends reducing proactive academic planning.</p>
        </div>
      </div>
    </section>
  )
}

export default Problem
