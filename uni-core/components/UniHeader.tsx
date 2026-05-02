'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BellIcon, CalendarBlankIcon, ClockIcon, GearIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const UniHeader = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5">
      <h1 className="text-xl font-bold">UniCore</h1>
      <div className="flex gap-2 items-center">
        <div className="flex bg-secondary p-0.5 px-3 border gap-5">
          <Button>Dashboard</Button>
          <Button variant='ghost'>Students</Button>
          <Button variant='ghost'>Facaulty</Button>
          <Button variant='ghost'>Events</Button>
          <Button variant='ghost'>Gallery</Button>
          <Button variant='ghost'>Complaits</Button>
          <Button variant='ghost'>Reports</Button>
          <Button variant='ghost'>Curriculums</Button>
          <Button variant='ghost'>Cafeteria</Button>
          <Button variant='ghost'>Lounges</Button>
        </div>
        <Button onClick={() => router.push('/login')}><SignOutIcon size={32} /></Button>
        <Button><BellIcon size={32} /></Button>
        <Button><UserIcon size={32} /></Button>
      </div>
    </header>
  )
}

export default UniHeader
