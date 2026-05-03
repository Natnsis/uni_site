'use client'
import StudentsTable from "@/components/StudentsTable"
import { Button } from "@/components/ui/button"
import { ClockCountdownIcon, FileArrowDownIcon, PlusIcon } from "@phosphor-icons/react"

const page = () => {

  const cards = [
    {
      name: 'Total Orders This Month',
      value: 200
    },
    {
      name: 'Pending Orders',
      value: 230
    },
    {
      name: 'Shipped Orders',
      value: 400
    },
    {
      name: 'Refunded Orders',
      value: 25
    },
    {
      name: 'Overall In Orders',
      value: 43
    },
  ]

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">All Students</h1>
        <div className="flex gap-4">
          <Button variant='outline'><ClockCountdownIcon /> New Joiners</Button>
          <Button variant='outline'><FileArrowDownIcon />Export Students</Button>
          <Button><PlusIcon />Add Students</Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 mt-5">
        {cards.map((c, index) => (
          <div key={index} className="border w-full h-20 p-3">
            <p className="text-sm font-light">{c.name}</p>
            <h1 className="text-xl font-bold">{c.value}</h1>
          </div>
        ))}
      </div>

      <StudentsTable />
    </div>
  )
}

export default page
