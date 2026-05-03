'use client'
import { Button } from "@/components/ui/button"
import { BellIcon, CalendarBlankIcon, ClockIcon, GearIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react"
import { useRouter, usePathname } from "next/navigation"

const UniHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const UniAdminUrls = [
    {
      name: 'Dashboard',
      link: '/uni-admin',
    },

    {
      name: 'Students',
      link: '/uni-admin/students',
    },

    {
      name: 'Facaulty',
      link: '/uni-admin/facaulty',
    },
    {
      name: 'Events',
      link: '/uni-admin/events',
    },
    {
      name: 'Gallery',
      link: '/uni-admin/gallery',
    },
    {
      name: 'Complaits',
      link: '/uni-admin/complaints',
    },

    {
      name: 'Reports',
      link: '/uni-admin/reports',
    },
    {
      name: 'Curriculums',
      link: '/uni-admin/curriculums',
    },
    {
      name: 'Cafeteria',
      link: '/uni-admin/cafeteria',
    },
    {
      name: 'Lounges',
      link: '/uni-admin/lounges',
    },
  ]

  return (
    <header className="flex justify-between p-5">
      <h1 className="text-xl font-bold">UniCore</h1>
      <div className="flex gap-2 items-center">
        <div className="flex bg-secondary p-0.5 px-3 border gap-5">
          {UniAdminUrls.map((u, index) => (
            <Button
              key={index}
              variant={pathname === u.link ? 'default' : 'ghost'}
              onClick={() => router.push(u.link)}
            >
              {u.name}
            </Button>
          ))}
        </div>
        <Button onClick={() => router.push('/login')}><SignOutIcon size={32} /></Button>
        <Button><BellIcon size={32} /></Button>
        <Button><UserIcon size={32} /></Button>
      </div>
    </header>
  )
}

export default UniHeader
