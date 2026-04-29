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
  useSidebar,
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
  const { state } = useSidebar()

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
      <SidebarHeader className="flex flex-row items-center gap-2">
        <GraduationCapIcon size={25} className="shrink-0" />
        {state === "expanded" && (
          <span className="truncate font-semibold">Uni-Core</span>
        )}
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
              <SignOutIcon />
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
