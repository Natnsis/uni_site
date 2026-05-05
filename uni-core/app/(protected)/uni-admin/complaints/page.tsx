'use client'
import ComplaintsTable from "@/components/ComplaintsTable"
import { CheckIcon, StudentIcon, TimerIcon, UserSwitchIcon } from "@phosphor-icons/react"

const page = () => {
  const cards = [
    {
      icon: StudentIcon,
      title: 'Student complaints',
      value: 623
    },
    {
      icon: UserSwitchIcon,
      title: 'Representative complaints',
      value: 237
    },
    {
      icon: TimerIcon,
      title: 'Pending complaints',
      value: 234
    },
    {
      icon: CheckIcon,
      title: 'Solved complaints',
      value: 663
    },
  ]
  return (
    <div className="h-[40%] px-5">
      <div className="grid grid-cols-4 gap-5">
        {cards.map((c, index) => (
          <div className="border p-3 px-5" key={index}>
            <div className="flex gap-3">
              <c.icon />
              <p className="text-sm font-light">{c.title}</p>
            </div>
            <h1 className="text-3xl font-bold">{c.value}</h1>
          </div>
        ))}
      </div>
      <ComplaintsTable />
    </div>
  )
}

export default page
