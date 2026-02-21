import Image from 'next/image';
const Features = () => {
  return (
    <section className="mt-20 px-20">
      <div className="flex flex-col">
        <div className="flex gap-5 justify-between p-5 items-center">
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-4xl">
              Monitor Academic Progress With Real Time Clarity</h1>
            <p>
              Students can calculate and track GPA, review semester performance, and stay informed about their academic standing all from a centralized dashboard available on web and mobile.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src="/monitor.png"
              alt="feature-1"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="w-full flex justify-center items-center">
            <Image
              src="/management.png"
              alt="feature-1"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-3xl">
              Manage Schedules and Deadlines Without the Confusion</h1>
            <p>
              Dynamic timetables, assignment tracking, and instant notifications ensure students never miss important updates while administrators maintain synchronized control.
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-3xl">
              Strengthen Campus Communication Through Built In Collaboration
            </h1>
            <p>
              Course based forums and real-time messaging create a structured, academic-focused environment for interaction between students and faculty.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src="/communication.png"
              alt="feature-1"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
