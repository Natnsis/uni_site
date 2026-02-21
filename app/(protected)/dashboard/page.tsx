import { SidebarTrigger } from "@/components/ui/sidebar"
const page = () => {
  return (
    <main className="flex p-2 items-center">
      <SidebarTrigger />
      <p className="text-sm">Welcome to StudySphare</p>
    </main>
  )
}

export default page
