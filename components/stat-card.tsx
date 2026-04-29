import React from "react"
import { Badge } from "./ui/badge"

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
  badge: string
}

export const StatCard = ({ icon, label, value, badge }: StatCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border p-3">
      <div className="flex items-center justify-between">
        <div className="w-fit rounded-lg bg-secondary p-2">{icon}</div>
        <Badge>{badge}</Badge>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <h1 className="text-4xl font-bold">{value}</h1>
      </div>
    </div>
  )
}
