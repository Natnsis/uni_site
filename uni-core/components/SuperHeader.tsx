
'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BellIcon, CalendarBlankIcon, ClockIcon, GearIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const SuperHeader = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5">
      <h1 className="text-xl font-bold">UniCore</h1>
      <div className="flex gap-2 items-center">
        <div className="flex bg-secondary p-0.5 px-3 border gap-5">
          <Button>Platform Overview</Button>
          <Button variant='ghost'>Universities</Button>
          <Button variant='ghost'>Total Students </Button>
          <Button variant='ghost'>Revenue Overview</Button>
          <Button variant='ghost'>Active Subscriptions</Button>
          <Button variant='ghost'>System Health</Button>
          <Button variant='ghost'>Recent Activity Logs</Button>
        </div>
        <Button onClick={() => router.push('/login')}><SignOutIcon size={32} /></Button>
        <Button><BellIcon size={32} /></Button>
        <Button><UserIcon size={32} /></Button>
      </div>
    </header>
  )
}

export default SuperHeader
