'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BellIcon, CalendarBlankIcon, ClockIcon, GearIcon, UserIcon } from "@phosphor-icons/react"

const Dashboard = () => {

  const events = [
    {
      date: 'oct 12',
      title: 'Facaulty mcp meetup',
      time: '10:30 am',
      location: 'admin block'
    },

    {
      date: 'oct 12',
      title: 'Facaulty mcp meetup',
      time: '10:30 am',
      location: 'admin block'
    },

    {
      date: 'oct 12',
      title: 'Facaulty mcp meetup',
      time: '10:30 am',
      location: 'admin block'
    },

    {
      date: 'oct 12',
      title: 'Facaulty mcp meetup',
      time: '10:30 am',
      location: 'admin block'
    },

    {
      date: 'oct 12',
      title: 'Facaulty mcp meetup',
      time: '10:30 am',
      location: 'admin block'
    },

    {
      date: 'oct 12',
      title: 'Facaulty mcp meetup',
      time: '10:30 am',
      location: 'admin block'
    },

    {
      date: 'oct 12',
      title: 'Facaulty mcp meetup',
      time: '10:30 am',
      location: 'admin block'
    },
  ]

  return (
    <main>
      <header className="flex justify-between p-5">
        <h1 className="text-xl font-bold">UniSite</h1>
        <div className="flex gap-2 items-center">
          <div className="flex bg-secondary p-0.5 px-3 border gap-5">
            <Button className='rounded-full'>Dashboard</Button>
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
          <Button><GearIcon size={32} /> Setting</Button>
          <Button><BellIcon size={32} /></Button>
          <Button><UserIcon size={32} /></Button>
        </div>
      </header>

      <section className="px-5">
        <h1 className="text-4xl">Welcome in, Admin</h1>
        <p className="text-gray-600 text-sm ml-2">Super Admin</p>
        <div className="flex gap-5">

          <div className="h-60 mt-5 w-[20vw]">
            <div className="border p-5">
              <div className="flex gap-5 items-center mb-3">
                <h1>Upcomming Events</h1>
              </div>

              <div className="flex flex-col gap-3 overflow-y-auto h-[40vh] scrollbar-hide">
                {events.map((e, index) => (
                  <div className="bg-gray-50 p-1" key={index}>
                    <Badge>{e.date}</Badge>
                    <div>
                      <p className="text-sm font-bold">{e.title}</p>
                      <div className="flex gap-2 text-sm items-center">
                        <ClockIcon size={15} />
                        {e.time}{" "}{e.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="h-60 mt-5 w-[30vw]">
            <div className="border p-5">
              <div className="flex gap-5 items-center mb-3">
                <h1>Class Announcements</h1>
                <CalendarBlankIcon size={20} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="">
                  <div className="flex gap-3 items-center">
                    <Badge>oct 12</Badge>
                    <p>2hrs ago</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Software Engneering timing shifted to 2pm</p>
                    <p className="text-sm font-light">please inform your teams about the change in room 402</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-cols-3 grid gap-5">
            <div className="p-10 border h-fit"></div>
            <div className="p-10 border"></div>
            <div className="p-10 border"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard 
