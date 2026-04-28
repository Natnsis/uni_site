import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>header</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>hehe</SidebarMenuItem>
          <SidebarMenuItem>hehe</SidebarMenuItem>
          <SidebarMenuItem>hehe</SidebarMenuItem>
          <SidebarMenuItem>hehe</SidebarMenuItem>
          <SidebarMenuItem>hehe</SidebarMenuItem>
          <SidebarMenuItem>hehe</SidebarMenuItem>
          <SidebarMenuItem>hehe</SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>logout</SidebarFooter>
    </Sidebar>
  )
}
