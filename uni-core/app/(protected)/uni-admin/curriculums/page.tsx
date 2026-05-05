'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { StarIcon } from "@phosphor-icons/react"

const page = () => {
  const curriculums = [
    {
      name: 'Data Structure and Algorithms',
      code: 'DSA123',
      description: 'main knowlage about basic understanding of data..',
      department: 'computer science',
      credit_hour: '3',
      prerequisites: 'must finish...this and that courses',
      difficulty: '4/10',
      syllabus: ['linkedlist', 'trees', 'sorting', 'queue']
    },
    {
      name: 'Object-Oriented Programming',
      code: 'CS102',
      description: 'Introduction to OOP principles using Java or C++. Focuses on abstraction, encapsulation, inheritance, and polymorphism.',
      department: 'Computer Science',
      credit_hour: 4,
      prerequisites: 'Introduction to Programming (CS101)',
      difficulty: '6/10',
      syllabus: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Interfaces', 'Exception Handling']
    },
    {
      name: 'Discrete Mathematics',
      code: 'MATH201',
      description: 'Mathematical structures that are fundamentally discrete rather than continuous. Essential for logic and algorithm design.',
      department: 'Mathematics',
      credit_hour: 3,
      prerequisites: 'Calculus I',
      difficulty: '7/10',
      syllabus: ['Propositional Logic', 'Set Theory', 'Graph Theory', 'Combinatorics', 'Boolean Algebra']
    },
    {
      name: 'Digital Logic Design',
      code: 'ECE121',
      description: 'Study of digital circuits, logic gates, and the design of combinational and sequential systems.',
      department: 'Electrical & Computer Engineering',
      credit_hour: 3,
      prerequisites: 'None',
      difficulty: '5/10',
      syllabus: ['Binary Systems', 'Logic Gates', 'Karnaugh Maps', 'Flip-Flops', 'Registers & Counters']
    },
    {
      name: 'Database Systems I',
      code: 'CS220',
      description: 'Fundamental concepts of database design and implementation. Focuses on the relational model and SQL.',
      department: 'Software Engineering',
      credit_hour: 3,
      prerequisites: 'None',
      difficulty: '4/10',
      syllabus: ['ER Modeling', 'Relational Algebra', 'SQL Queries', 'Normalization', 'Indexing']
    }
  ]

  return (
    <div className="px-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-gray-600 text-sm">Select a Year: </p>
          <div className="flex gap-2">
            <Button size='icon'>1</Button>
            <Button variant='outline' size='icon'>2</Button>
            <Button variant='outline' size='icon'>3</Button>
            <Button variant='outline' size='icon'>4</Button>
            <Button variant='outline' size='icon'>5</Button>
            <Button variant='outline' size='icon'>6</Button>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-xs">Select a Department: </p>
          <Select>
            <SelectTrigger className='w-[20vw] border-2'>
              <SelectValue placeholder="select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='Active'>Fresh Men</SelectItem>
                <SelectItem value='Active'>Pre Fresh Men</SelectItem>
                <SelectItem value='Active'>Pre Engneering</SelectItem>
                <SelectItem value='Active'>Computer Science</SelectItem>
                <SelectItem value='Inactive'>Information Technology</SelectItem>
                <SelectItem value='Pending'>Information System</SelectItem>
                <SelectItem value='Pending'>Pharmacy</SelectItem>
                <SelectItem value='Pending'>Mid Wifer</SelectItem>
                <SelectItem value='Pending'>Electrical Engneering</SelectItem>
                <SelectItem value='Pending'>Civil Engneering</SelectItem>
                <SelectItem value='Pending'>Software Engneering</SelectItem>
                <SelectItem value='Pending'>Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-2">
          <Button>Regular</Button>
          <Button variant='outline'>Summer</Button>
          <Button variant='outline'>Half a year</Button>
          <Button variant='outline'>Post Graduate</Button>
        </div>
      </div>

      <div className="mt-5 flex justify-between">
        <div className="flex gap-2 items-center">
          <p>Search:</p>
          <Input className="border-2" />
        </div>
        <div className="flex gap-1 items-center ">
          <p className="text-sm">Add Curriculum Data <span className="font-light">(must be excel): </span></p>
          <Button><StarIcon />Upload File</Button>
        </div>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-6">
          {curriculums.map((c, index) => (
            <div className="border w-50 p-3 flex flex-col gap-3" key={index}>
              <p className="text-sm font-light">{c.code}</p>
              <h1 className="text-2xl font-bold">{c.name}</h1>
              <p className="font-light">{c.department}</p>
              <div className="flex justify-between text-xs font-light">
                <p>C.hr: {c.credit_hour}</p>
                <p>Difficulty: {c.difficulty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
