'use client'

import EventsTable from "@/components/EventsTable";
import { Button } from "@/components/ui/button";
import { BooksIcon, ConfettiIcon, StudentIcon, TimerIcon, UsersThreeIcon } from "@phosphor-icons/react";
import Image from 'next/image';

const page = () => {
  const anlytics = [
    {
      icon: BooksIcon,
      title: 'Academic & Research',
      value: '128'
    },
    {
      icon: StudentIcon,
      title: 'Student Life',
      value: '128'
    },

    {
      icon: UsersThreeIcon,
      title: 'Holidays',
      value: '128'
    },
    {
      icon: ConfettiIcon,
      title: 'Professional Development',
      value: '128'
    }
  ]

  const events = [
    {
      img: '/not-found.png',
      title: 'Jestin Beiber Concert',
      time: '30 Mar 2022, 7:30pm'
    },
    {
      img: '/not-found.png',
      title: 'Jestin Beiber Concert',
      time: '30 Mar 2022, 7:30pm'
    },
    {
      img: '/not-found.png',
      title: 'Jestin Beiber Concert',
      time: '30 Mar 2022, 7:30pm'
    },
    {
      img: '/not-found.png',
      title: 'Jestin Beiber Concert',
      time: '30 Mar 2022, 7:30pm'
    },
  ]

  return (
    <div className="px-5">
      <div>
        <div className="flex gap-5 justify-between items-start">
          <div className="grid grid-cols-4 gap-5 mt-5 flex-1">
            {anlytics.map((a, index) => (
              <div className="p-2 border flex items-center gap-5 px-4" key={index}>
                <div><a.icon size={25} /></div>
                <div className="flex flex-col justify-center grid-rows-3">
                  <h1 className="text-xs text-center">{a.title}</h1>
                  <p className="text-4xl text-center">{a.value}</p>
                </div>
              </div>
            ))}

            <div className="col-span-4 border p-5">
              <h1 className="font-bold">Recent or Ongoing Events</h1>
              <div className="grid grid-cols-4 gap-5 mt-5">
                {events.map((e, index) => (
                  <div className="border" key={index}>
                    <div className="p-5">
                      <Image src={e.img} alt='event-1' width={200} height={200} className="h-25" />
                    </div>
                    <div className="bg-secondary p-5">
                      <h1 className="font-bold">{e.title}</h1>
                      <div className="flex gap-2 items-center">
                        <TimerIcon size={15} />
                        <p className="text-xs">{e.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="p-2 border px-4 my-5">
              <h1 className="font-bold">Notifications</h1>
              <div className="flex flex-col gap-2 overflow-y-auto mt-3 h-60">
                <div>
                  <h1 className="text-sm">Roberto Ahman Person</h1>
                  <p className="text-sm text-muted-foreground">has bought 3 economy class on your event</p>
                </div>
                <div>
                  <h1 className="text-sm">Roberto Ahman Person</h1>
                  <p className="text-sm text-muted-foreground">has bought 3 economy class on your event</p>
                </div>
                <div>
                  <h1 className="text-sm">Roberto Ahman Person</h1>
                  <p className="text-sm text-muted-foreground">has bought 3 economy class on your event</p>
                </div>
                <div>
                  <h1 className="text-sm">Roberto Ahman Person</h1>
                  <p className="text-sm text-muted-foreground">has bought 3 economy class on your event</p>
                </div>
                <div className="row-span-4">
                  <h1 className="text-sm">Roberto Ahman Person</h1>
                  <p className="text-sm text-muted-foreground">has bought 3 economy class on your event</p>
                </div>
              </div>
            </div>
            <div>
              <Button className='w-full' size='lg'>Add An Event</Button>
            </div>
          </div>
        </div>

        <div className="">
          <EventsTable />
        </div>
      </div>

    </div>
  )
}

export default page
