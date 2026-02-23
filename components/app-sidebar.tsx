'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarTrigger
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Newspaper,
  Settings,
  CalendarCog,
  ClipboardClock,
  Info,
  BadgeQuestionMark,
  LogOut
} from "lucide-react"
import Image from 'next/image'

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
  },
  {
    title: "News",
    icon: Newspaper,
    url: "/news",
  },
  {
    title: "Schedule",
    icon: CalendarCog,
    url: "/schedule",
  },
  {
    title: "Curriculum",
    icon: ClipboardClock,
    url: "/curriculum",
  },
  {
    title: "Criticism",
    icon: Info,
    url: "/criticism",
  },
]

const extras = [
  {
    title: "Setting",
    icon: Settings,
    url: "/setting",
  },
  {
    title: "Help",
    icon: BadgeQuestionMark,
    url: "/help",
  },
  {
    title: "Logout",
    icon: LogOut,
  }
]

export function AppSidebar() {
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mb-5">
              <div
                className={`flex ${state === "collapsed"
                  ? "flex-col items-center gap-3"
                  : "flex-row items-center gap-2"
                  }`}
              >
                {state === "collapsed" && <SidebarTrigger />}

                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                  />

                  {state !== "collapsed" && (
                    <h1 className="font-bold text-lg">
                      Study<span className="text-primary">Sphare</span>
                    </h1>
                  )}

                  {state !== "collapsed" && (
                    <div className="ml-auto">
                      <SidebarTrigger />
                    </div>
                  )}
                </div>
              </div>
            </SidebarMenu>

            <SidebarMenu className="mt-5">
              {state !== "collapsed" && (
                <p className="text-sm text-gray-600 pl-2">Menu</p>
              )}
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-gray-600">
                      <item.icon />
                      {state !== "collapsed" && (
                        <span>{item.title}</span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <SidebarMenu className="mt-5">
              {state !== "collapsed" && (
                <p className="text-sm text-gray-600 pl-2">General</p>
              )}
              {extras.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-gray-600">
                      <item.icon />
                      {state !== "collapsed" && (
                        <span>{item.title}</span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
