import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trash2, Pencil } from 'lucide-react';
import NewsCount from '@/components/NewsCount';

const page = () => {
  const newsArray = [
    {
      time: "May 18, 2025",
      type: "Test Announcement",
      title: "Start testing superior door protect d3 jawseller",
      description: "Initial system-wide test announcement for validating the news broadcast feature and admin publishing flow.",
      image: "/logo.png"
    },
    {
      time: "May 22, 2025",
      type: "Feature Update",
      title: "New GPA Calculator Released",
      description: "Students can now calculate semester and cumulative GPA with improved accuracy and performance.",
      image: "/logo.png"
    },
    {
      time: "May 30, 2025",
      type: "System Update",
      title: "Improved Dashboard Performance",
      description: "Optimized loading time and reduced unnecessary re-renders across the main dashboard.",
      image: "/logo.png"
    },
    {
      time: "June 3, 2025",
      type: "Announcement",
      title: "Assignment Notification System Live",
      description: "Students will now receive real-time notifications for newly posted assignments and deadlines.",
      image: "/logo.png"
    },
    {
      time: "June 10, 2025",
      type: "Maintenance",
      title: "Scheduled Server Maintenance",
      description: "The platform will undergo maintenance this weekend to improve stability and scalability.",
      image: "/logo.png"
    },
    {
      time: "June 18, 2025",
      type: "Feature Update",
      title: "Timetable Scheduler Upgrade",
      description: "Enhanced scheduling system with conflict detection and improved UI clarity.",
      image: "/logo.png"
    },
    {
      time: "June 25, 2025",
      type: "Security",
      title: "Authentication System Enhanced",
      description: "Improved session handling and strengthened security validation for user authentication.",
      image: "/logo.png"
    },
    {
      time: "July 2, 2025",
      type: "Announcement",
      title: "Mobile App Beta Access",
      description: "Selected users can now access the beta version of the StudySphare mobile application.",
      image: "/logo.png"
    },
    {
      time: "July 12, 2025",
      type: "Feature Update",
      title: "News & Updates Module Launched",
      description: "Admins can now publish announcements directly from the dashboard with real-time updates.",
      image: "/logo.png"
    },
    {
      time: "July 20, 2025",
      type: "Improvement",
      title: "UI Refinement Across Platform",
      description: "Refined spacing, typography, and overall layout consistency for a cleaner experience.",
      image: "/logo.png"
    },
    {
      time: "August 1, 2025",
      type: "Integration",
      title: "API Optimization Completed",
      description: "Backend API endpoints optimized for faster response times and reduced payload size.",
      image: "/logo.png"
    },
    {
      time: "August 14, 2025",
      type: "Announcement",
      title: "Study Resources Section Added",
      description: "Students can now access shared study materials and curated academic resources.",
      image: "/logo.png"
    }
  ]

  return (
    <main className="h-screen p-5">
      <h1 className="text-2xl font-bold">News Management</h1>
      <p className="text-xs">
        Create, publish, and manage official announcements and updates for all students.
      </p>
      <NewsCount />
      <div className="my-5 h-[70%] overflow-auto">
        {newsArray.map((m, index) => (
          <div className="flex justify-between gap-5" key={index}>
            <div className='w-1/7'>
              <p className='text-xs'>
                {m.time}
              </p>
            </div>
            <div className='w-4/7'>
              <h1 className='uppercase text-xs font-bold text-primary'>
                {m.type}
              </h1>
              <p className='font-bold'>
                {m.title}
              </p>
              <p className='text-xs'>
                {m.description}
              </p>
            </div>
            <div className='2/7'>
              <Image
                src={m.image}
                alt='news-img'
                width={100}
                height={100}
              />
            </div>
            <div className='flex items-center justify-center gap-1'>
              <Button>
                <Pencil />
              </Button>
              <Button variant="destructive">
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main >
  )
}

export default page
