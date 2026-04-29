"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  BellIcon,
  BookIcon,
  CalendarIcon,
  ChartLineIcon,
  ConfettiIcon,
  GearIcon,
  GraduationCapIcon,
  HouseLineIcon,
  UsersIcon,
  WarningIcon,
} from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

export function AppSidebar() {
  const route = useRouter()

  const contents = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: HouseLineIcon,
    },
    {
      label: "Curriculum",
      path: "/curriculum",
      icon: BookIcon,
    },
    {
      label: "Events",
      path: "/events",
      icon: ConfettiIcon,
    },
    {
      label: "Schedules",
      path: "/schedules",
      icon: CalendarIcon,
    },
    {
      label: "Faculty",
      path: "/faculty",
      icon: GraduationCapIcon,
    },
    {
      label: "Students",
      path: "/students",
      icon: UsersIcon,
    },
    {
      label: "Complaints",
      path: "/complaints",
      icon: WarningIcon,
    },
    {
      label: "Announcements",
      path: "/announcements",
      icon: BellIcon,
    },
    {
      label: "Reports",
      path: "/reports",
      icon: ChartLineIcon,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: GearIcon,
    },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b p-4 font-bold group-data-[collapsible=icon]:p-2">
        <div className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground group-data-[collapsible=icon]:size-6">
            U
          </div>
          <span className="truncate group-data-[collapsible=icon]:hidden">
            University
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {contents.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  tooltip={item.label}
                  onClick={() => {
                    route.push(item.path)
                  }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Logout">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-md border bg-background text-[10px] font-medium text-muted-foreground group-data-[collapsible=icon]:size-4">
                L
              </div>
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
