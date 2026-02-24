import { Button } from "@/components/ui/button";
import { Plus, Trash } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const page = () => {
  const courses = [
    {
      "name": "Data Structures and Algorithms",
      "courseCode": "CS201",
      "creditHour": 4,
      "semester": "Fall 2026",
      "type": "Core",
      "description": "Explores fundamental concepts of data organization and algorithmic efficiency. Topics include linked lists, trees, graphs, and sorting algorithms."
    },
    {
      "name": "Communicative English Skills",
      "courseCode": "ENGL101",
      "creditHour": 3,
      "semester": "Fall 2026",
      "type": "Common",
      "description": "Focuses on developing essential academic writing and verbal communication skills required across all disciplines."
    },
    {
      "name": "Mobile Application Development",
      "courseCode": "CS405",
      "creditHour": 3,
      "semester": "Spring 2027",
      "type": "Elective",
      "description": "An advanced course in building cross-platform mobile apps using frameworks like Flutter or React Native, focusing on UI/UX and state management."
    },
    {
      "name": "Senior Research Seminar",
      "courseCode": "SEM499",
      "creditHour": 2,
      "semester": "Spring 2027",
      "type": "Seminar",
      "description": "A discussion-heavy course where students present findings from their independent research projects and critique peer work."
    },
    {
      "name": "Introduction to Emerging Technologies",
      "courseCode": "TECH112",
      "creditHour": 3,
      "semester": "Spring 2027",
      "type": "Common",
      "description": "Provides an overview of transformative tech trends, including AI, Blockchain, and IoT, and their impact on modern society."
    },
    {
      "name": "Advanced Database Systems",
      "courseCode": "CS302",
      "creditHour": 4,
      "semester": "Fall 2026",
      "type": "Core",
      "description": "In-depth study of relational and non-relational databases (MySQL and MongoDB), indexing strategies, and transaction management."
    }
  ]

  return (
    <main className="h-screen flex flex-col p-3">
      <h1 className="font-bold text-2xl">Freshman Common Course</h1>
      <p className="text-sm text-gray-600">
        First year core university requirements for all programs
      </p>
      <div className="p-5 flex justify-between gap-5 flex-1">
        <div className="w-full rounded-lg p-5 bg-secondary flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold flex items-end">Semester 1</h1>
            <Button>
              <Plus />
            </Button>
          </div>
          <p className="text-gray-700 text-xs">
            you can drag and drop the courses to change semester placement
          </p>
          <div className="h-[70vh] overflow-y-auto pt-5">
            {courses.map((c, index) => (
              <div className="bg-white p-2 rounded-lg shadow-sm mb-2" key={index}>
                <div className="flex justify-between">
                  <h1 className="font-bold text-lg">{c.name}</h1>
                  <Button variant="destructive">
                    <Trash />
                  </Button>
                </div>
                <div className="flex gap-2 my-2">
                  <Badge variant='outline'>{c.type}</Badge>
                  <Badge variant='outline'>{c.courseCode}</Badge>
                  <Badge variant='outline'>{c.semester}</Badge>
                </div>
                <div className="bg-secondary mr-2 p-2 rounded">
                  <p className="text-xs">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-lg p-5 bg-secondary flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold flex items-end">Semester 2</h1>
            <Button>
              <Plus />
            </Button>
          </div>
          <p className="text-gray-700 text-xs">
            you can drag and drop the courses to change semester placement
          </p>
          <div className="h-[70vh] overflow-y-auto pt-5">
            {courses.map((c, index) => (
              <div className="bg-white p-2 rounded-lg shadow-sm mb-2" key={index}>
                <div className="flex justify-between">
                  <h1 className="font-bold text-lg">{c.name}</h1>
                  <Button variant="destructive">
                    <Trash />
                  </Button>
                </div>
                <div className="flex gap-2 my-2">
                  <Badge variant='outline'>{c.type}</Badge>
                  <Badge variant='outline'>{c.courseCode}</Badge>
                  <Badge variant='outline'>{c.semester}</Badge>
                </div>
                <div className="bg-secondary mr-2 p-2 rounded">
                  <p className="text-xs">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
