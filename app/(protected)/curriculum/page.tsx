import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";
import { Button } from '@/components/ui/button';

const page = () => {
  const curriculum = [
    // Year 1: Common Freshman Courses (all departments)
    {
      year: 1,
      name: 'Freshman Common Courses',
      semesters: 2,
      field: 'all',
      description: 'First year core university requirements for all programs',
      courses: [
        "Communicative English I",
        "Communicative English II",
        "Mathematics for Natural Sciences",
        "General Physics",
        "Critical Thinking",
        "Geography of Ethiopia",
        "General Chemistry",
        "Introduction to Computer Programming"
      ]
    },

    // Computer Science (4-year)
    {
      year: 2,
      name: 'Computer Science',
      semesters: 2,
      field: 'Engineering/Computing',
      description: 'Introduction to core CS topics',
      courses: [
        "Introduction to Computer Science",
        "Fundamentals of Programming I",
        "Data Structures and Algorithms",
        "Discrete Mathematics",
        "Computer Organization and Architecture"
      ]
    },
    {
      year: 3,
      name: 'Computer Science',
      semesters: 2,
      field: 'Engineering/Computing',
      description: 'Intermediate CS topics',
      courses: [
        "Advanced Database Systems",
        "Operating Systems",
        "Computer Networking",
        "Software Engineering",
        "Web & Mobile Development"
      ]
    },
    {
      year: 4,
      name: 'Computer Science',
      semesters: 2,
      field: 'Engineering/Computing',
      description: 'Final CS courses + capstone',
      courses: [
        "Artificial Intelligence",
        "Computer Security",
        "Human Computer Interaction",
        "Elective (e.g., Machine Learning)",
        "Final Year Project"
      ]
    },

    // Business Administration (4-year)
    {
      year: 2,
      name: 'Business Administration',
      semesters: 2,
      field: 'Business & Economics',
      description: 'Core business foundation',
      courses: [
        "Principles of Management",
        "Principles of Accounting",
        "Business Statistics",
        "Microeconomics",
        "Introduction to Marketing"
      ]
    },
    {
      year: 3,
      name: 'Business Administration',
      semesters: 2,
      field: 'Business & Economics',
      description: 'Intermediate business courses',
      courses: [
        "Organizational Behavior",
        "Business Law",
        "Financial Management",
        "Operations Management",
        "Business Communication"
      ]
    },
    {
      year: 4,
      name: 'Business Administration',
      semesters: 2,
      field: 'Business & Economics',
      description: 'Advanced topics and capstone',
      courses: [
        "Strategic Management",
        "Entrepreneurship",
        "International Business",
        "Business Ethics",
        "Business Project/Thesis"
      ]
    },

    // Civil Engineering (5-year in many Ethiopian universities) :contentReference[oaicite:1]{index=1}
    {
      year: 2,
      name: 'Civil Engineering',
      semesters: 2,
      field: 'Engineering',
      description: 'Engineering fundamentals',
      courses: [
        "Statics",
        "Engineering Mathematics II",
        "Engineering Drawing",
        "Mechanics of Materials",
        "Surveying I"
      ]
    },
    {
      year: 3,
      name: 'Civil Engineering',
      semesters: 2,
      field: 'Engineering',
      description: 'Core civil engineering',
      courses: [
        "Structural Analysis",
        "Concrete Technology",
        "Transportation Engineering",
        "Hydraulics",
        "Geotechnical Engineering"
      ]
    },
    {
      year: 4,
      name: 'Civil Engineering',
      semesters: 2,
      field: 'Engineering',
      description: 'Specialized civil topics',
      courses: [
        "Reinforced Concrete Design",
        "Construction Management",
        "Water Resources Engineering",
        "Environmental Engineering",
        "Elective"
      ]
    },
    {
      year: 5,
      name: 'Civil Engineering',
      semesters: 2,
      field: 'Engineering',
      description: 'Final year engineering project',
      courses: [
        "Capstone Design Project",
        "Advanced Structural Design",
        "Urban Infrastructure",
        "Professional Practice",
        "Technical Elective"
      ]
    },

    // Pharmacy (5-year in Ethiopia typically) :contentReference[oaicite:2]{index=2}
    {
      year: 2,
      name: 'Pharmacy',
      semesters: 2,
      field: 'Health Sciences',
      description: 'Basic pharmaceutical sciences',
      courses: [
        "Pharmaceutics I",
        "Organic Chemistry",
        "Human Anatomy & Physiology",
        "Biochemistry",
        "Pharmaceutical Calculations"
      ]
    },
    {
      year: 3,
      name: 'Pharmacy',
      semesters: 2,
      field: 'Health Sciences',
      description: 'Intermediate pharmacy courses',
      courses: [
        "Pharmacology I",
        "Pharmacognosy",
        "Pharmaceutical Microbiology",
        "Medicinal Chemistry",
        "Biostatistics"
      ]
    },
    {
      year: 4,
      name: 'Pharmacy',
      semesters: 2,
      field: 'Health Sciences',
      description: 'Advanced pharmacy subjects',
      courses: [
        "Pharmacotherapeutics",
        "Pharmacy Practice",
        "Clinical Pharmacy",
        "Pharmaceutical Biotechnology",
        "Drug Information Services"
      ]
    },
    {
      year: 5,
      name: 'Pharmacy',
      semesters: 2,
      field: 'Health Sciences',
      description: 'Final year pharmacy internship & project',
      courses: [
        "Pharmacy Internship",
        "Capstone Research Project",
        "Professional Ethics",
        "Health Systems & Policy",
        "Elective"
      ]
    },

    // Law (usually 5-year LL.B in Ethiopia) :contentReference[oaicite:3]{index=3}
    {
      year: 2,
      name: 'Law',
      semesters: 2,
      field: 'Social Science',
      description: 'Foundational law courses',
      courses: [
        "Constitutional Law",
        "Legal Methods",
        "Criminal Law I",
        "Contract Law",
        "Property Law"
      ]
    },
    {
      year: 3,
      name: 'Law',
      semesters: 2,
      field: 'Social Science',
      description: 'Intermediate law topics',
      courses: [
        "Civil Procedure",
        "Administrative Law",
        "Human Rights Law",
        "Family Law",
        "Evidence Law"
      ]
    },
    {
      year: 4,
      name: 'Law',
      semesters: 2,
      field: 'Social Science',
      description: 'Advanced law courses',
      courses: [
        "International Law",
        "Commercial Law",
        "Labour Law",
        "Land Law",
        "Legal Ethics"
      ]
    },
    {
      year: 5,
      name: 'Law',
      semesters: 2,
      field: 'Social Science',
      description: 'Final law year & internship',
      courses: [
        "Trial Advocacy",
        "Legal Clinic/Internship",
        "Law Project/Thesis",
        "Elective",
        "Professional Responsibility"
      ]
    }
  ];
  return (
    <main className="h-screen p-5 flex flex-col">
      <h1 className="text-2xl font-bold">Curriculum</h1>
      <p className="text-sm text-gray-600">
        Outline the complete academic structure of your program.
      </p>

      {/* Filters */}
      <div className="bg-secondary mt-3 rounded-lg p-2 flex justify-between px-5">
        <div className="flex gap-10">
          <div>
            <p className="text-sm mb-1 text-primary">Student Year</p>
            <NativeSelect className="w-[20vw]">
              <NativeSelectOption value="">Select a year</NativeSelectOption>
              <NativeSelectOption value="1">Year 1</NativeSelectOption>
              <NativeSelectOption value="2">Year 2</NativeSelectOption>
              <NativeSelectOption value="3">Year 3</NativeSelectOption>
              <NativeSelectOption value="4">Year 4</NativeSelectOption>
            </NativeSelect>
          </div>

          <div>
            <p className="text-sm mb-1 text-primary">Department</p>
            <NativeSelect className="w-[20vw]">
              <NativeSelectOption value="">Select a department</NativeSelectOption>
              <NativeSelectOption value="CS">Computer Science</NativeSelectOption>
              <NativeSelectOption value="BA">Business Administration</NativeSelectOption>
              <NativeSelectOption value="CE">Civil Engineering</NativeSelectOption>
            </NativeSelect>
          </div>
        </div>

        <div className="flex items-center w-1/3 gap-2">
          <div className="w-full">
            <p className="text-sm mb-1 text-primary">Search</p>
            <Input placeholder="data structures and algorithm..." className="bg-white" />
          </div>
        </div>
      </div>

      {/* Curriculum Cards */}
      <div className="flex-1 mt-5 overflow-auto">
        <div className="min-h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculum.map((c, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <Badge className="bg-primary">{c.year}</Badge>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {c.field}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-sm sm:text-base font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {c.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm flex-1">
                {c.description}
              </p>

              {/* Action Button */}
              <div className="flex justify-end mt-4">
                <Button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Pencil className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default page
