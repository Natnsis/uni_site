
'use client'

import { Button } from "@/components/ui/button"
import { BellIcon, CalendarBlankIcon, ClockIcon, GearIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SuperHeader = () => {
  const router = useRouter();
  const [activeUrl, setActiveUrl] = useState('overview');
  const superAdminUrls = [
    {
      name: 'Platform Overview',
      link: '/super-admin',
      key: 'overview'
    },
    {
      name: 'Universities',
      link: '/super-admin/universities',
      key: 'universities'
    },
    {
      name: 'Total Students',
      link: '/super-admin/students',
      key: 'students'
    },
    {
      name: 'Revenue Overview',
      link: '/super-admin/revenue',
      key: 'revenue'
    },
    {
      name: 'Active Subscriptions',
      link: '/super-admin/subscriptions',
      key: 'subscriptions'
    },
    {
      name: 'System Health',
      link: '/super-admin/health',
      key: 'health'
    },
    {
      name: 'Recent Activity Logs',
      link: '/super-admin/recent-activity',
      key: 'recent-activity'
    },
  ]

  const navigate = (link: string, key: string) => {
    setActiveUrl(key);
    router.push(link);
  }

  return (
    <header className="flex justify-between p-5">
      <h1 className="text-xl font-bold">UniCore</h1>
      <div className="flex gap-2 items-center">
        <div className="flex bg-secondary p-0.5 px-3 border gap-5">
          {superAdminUrls.map((u, index) => (
            <Button
              key={index}
              onClick={() => navigate(u.link, u.key)}
              variant={activeUrl === u.key ? 'default' : 'ghost'}
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

export default SuperHeader
