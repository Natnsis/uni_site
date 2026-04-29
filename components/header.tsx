import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BellIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"

const Header = () => {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4">
      <div className="flex items-center gap-5">
        <SidebarTrigger />
        <h1 className="text-xl font-bold">Admin Portal</h1>
      </div>

      <div className="flex gap-3">
        <div className="flex w-[20vw] items-center gap-1 rounded-xl border px-2 transition-colors active:border-transparent">
          <MagnifyingGlassIcon size={25} />
          <Input
            placeholder="Search resources..."
            className="border-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Button variant="outline">
          <BellIcon />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
