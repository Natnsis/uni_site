'use client'

import { Button } from "@/components/ui/button"
import { BellIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react"
import { useRouter, usePathname } from "next/navigation"

const SuperHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const superAdminUrls = [
    {
      name: 'Platform Overview',
      link: '/super-admin',
    },
    {
      name: 'Universities',
      link: '/super-admin/universities',
    },
    {
      name: 'Total Students',
      link: '/super-admin/students',
    },
    {
      name: 'Revenue Overview',
      link: '/super-admin/revenue',
    },
    {
      name: 'Active Subscriptions',
      link: '/super-admin/subscriptions',
    },
    {
      name: 'System Health',
      link: '/super-admin/health',
    },
    {
      name: 'Recent Activity Logs',
      link: '/super-admin/recent-activity',
    },
  ]

  return (
    <header className="flex justify-between p-5">
      <h1 className="text-xl font-bold">UniCore</h1>
      <div className="flex gap-2 items-center">
        <div className="flex bg-secondary p-0.5 px-3 border gap-5">
          {superAdminUrls.map((u, index) => (
            <Button
              key={index}
              onClick={() => router.push(u.link)}
              variant={pathname === u.link ? 'default' : 'ghost'}
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
