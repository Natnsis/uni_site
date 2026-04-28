"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <Button variant="outline" size="icon" onClick={changeTheme}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
