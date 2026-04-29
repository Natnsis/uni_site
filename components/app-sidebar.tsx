"use client"
import { Button } from "./ui/button"

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
  SignOutIcon,
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
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <GraduationCapIcon size={25} /> Uni-Core
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
              <Button>
                Logout
                <SignOutIcon />
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
