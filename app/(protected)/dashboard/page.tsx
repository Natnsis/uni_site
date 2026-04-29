"use client"
import { StatCard } from "@/components/stat-card"
import { Badge } from "@/components/ui/badge"
import {
  UserListIcon,
  CheckCircleIcon,
  StarFourIcon,
} from "@phosphor-icons/react"

const page = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-5">
        <StatCard
          icon={<UserListIcon size={25} />}
          label="Active Students"
          value="12,482"
          badge="+12%"
        />

        <StatCard
          icon={<CheckCircleIcon size={25} />}
          label="Resolved Compliants"
          value="342"
          badge="+5%"
        />

        <StatCard
          icon={<StarFourIcon size={25} />}
          label="Dept. Performance"
          value="8.4/10"
          badge="High"
        />
      </div>
    </main>
  )
}

export default page
