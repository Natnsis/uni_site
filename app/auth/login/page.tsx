"use client"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { GlobeIcon, GoogleLogoIcon, QuestionIcon } from "@phosphor-icons/react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const page = () => {
  const router = useRouter()
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex justify-center gap-20">
        <div className="flex w-[35vw] flex-col gap-10 p-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-primary">UniCore</h1>
            <p className="text-center text-primary">Admin Hub</p>
          </div>
          <div className="flex flex-col gap-5 rounded-lg bg-white p-5">
            <div>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-lg">Sign in to manage institution</p>
            </div>

            <div>
              <p>Email</p>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <p>Password</p>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <Button
              className="h-10 text-lg"
              onClick={() => router.push("/dashboard")}
            >
              Login
            </Button>
            <Separator />
            <Button className="h-10 text-lg" variant="outline">
              <GoogleLogoIcon size={20} weight="fill" />
              Continue With Google
            </Button>
            <div>
              <p className="text-center">
                Authorized personnel only. Access is monitored and logged.
              </p>
              <div className="mt-5 flex items-center justify-center gap-10">
                <div className="flex items-center">
                  <QuestionIcon size={15} />
                  <p className="text-sm">Support</p>
                </div>
                <div className="flex items-center">
                  <GlobeIcon size={15} />
                  <p className="text-sm">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/600x600"
            alt="login-img"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </main>
  )
}

export default page
