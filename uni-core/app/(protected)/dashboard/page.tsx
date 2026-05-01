'use client'

import { Button } from "@/components/ui/button"
import { BellIcon, GearIcon, UserIcon } from "@phosphor-icons/react"

const Dashboard = () => {
  return (
    <main>
      <header className="flex justify-between p-5">
        <h1 className="text-xl font-bold">UniSite</h1>
        <div className="flex gap-2 items-center">
          <div className="flex bg-secondary p-0.5 px-5 border gap-5">
            <Button className='rounded-full'>Dashboard</Button>
            <Button variant='ghost'>Students</Button>
            <Button variant='ghost'>Facaulty</Button>
            <Button variant='ghost'>Complaits</Button>
            <Button variant='ghost'>Reports</Button>
            <Button variant='ghost'>Curriculums</Button>
            <Button variant='ghost'>Cafeteria</Button>
            <Button variant='ghost'>Lounges</Button>
          </div>
          <Button><GearIcon size={32} /> Setting</Button>
          <Button><BellIcon size={32} /></Button>
          <Button><UserIcon size={32} /></Button>
        </div>
      </header>
    </main>
  )
}

export default Dashboard 
