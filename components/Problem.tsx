import { Split } from "lucide-react"

const Problem = () => {
  return (
    <section className="px-20">
      <h1 className="text-5xl w-4/5 mb-5">
        Universities Are Managing Students With Fragmented Systems.
      </h1>
      <p className="w-4/5 mb-5">
        Timetables in one system. Grades in another. Announcements buried in emails.
        Students and administrators waste hours switching between platforms that don’t communicate.
      </p>
      <div className="flex gap-5">
        <div className="h-[60vh] hover:h-[70vh] bg-secondary w-full hover:bg-primary p-5">
          <div className="h-25 flex justify-center items-center">
            <Split />
          </div>
          <h1>Fragmented Systems</h1>
          <h2>Disconnected Academic Tools</h2>
          <p>Grades, schedules, announcements, and communication tools are spread across multiple platforms. This fragmentation creates confusion and wastes valuable time.</p>
        </div>
        <div className="h-[60vh] hover:h-[70vh] bg-secondary w-full hover:bg-primary p-5">
          <h1>Poor Communication Flow</h1>
          <h2>Inefficient Student Communication</h2>
          <p>Important updates are buried in emails or lost in messaging apps. Students miss deadlines, and administrators struggle to ensure consistent engagement.</p>
        </div>
        <div className="h-[60vh] hover:h-[70vh] bg-secondary w-full hover:bg-primary p-5">
          <h1>Limited Academic Visibility</h1>
          <h2>Lack of Real-Time Academic Insights</h2>
          <p>Students often have no centralized way to monitor GPA progress, upcoming deadlines, or performance trends — reducing proactive academic planning.</p>
        </div>
      </div>
    </section>
  )
}

export default Problem
