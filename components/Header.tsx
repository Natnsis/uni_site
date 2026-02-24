"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()
  return (
    <header className="flex justify-center p-7 border-b">
      <div className=" h-10 flex justify-between items-center w-[95%] ">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo-img"
            width={40}
            height={40}
          />
          <h1 className="font-bold">StudySphare</h1>
        </div>

        <nav className="flex gap-5">
          <a className="font-bold text-sm">Home</a>
          <a className="text-sm">Problem</a>
          <a className="text-sm">Features</a>
          <a className="text-sm">How it Works</a>
        </nav>

        <div className="flex gap-5">
          <Button
            variant="secondary"
          >
            Get the app
          </Button>

          <Button
            variant="outline"
          >
            Give a star
          </Button>

          <Button
            onClick={() => router.push('/login')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
