"use client"

import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArmchairIcon,
  ArrowRightIcon,
  BowlFoodIcon,
  CalendarDotsIcon,
  DeviceMobileCameraIcon,
  PlayIcon,
  ShieldCheckIcon,
  SignInIcon,
  StarIcon,
  TicketIcon,
} from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  return (
    <main>
      {/*header section*/}
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="#">
          <h1 className="text-2xl font-bold text-primary">UniCore</h1>
        </Link>
        <nav className="flex gap-6">
          <Link href="#" className="hover:text-primary hover:underline">
            Features
          </Link>
          <Link href="#" className="hover:text-primary hover:underline">
            Campus Life
          </Link>
          <Link href="#" className="hover:text-primary hover:underline">
            Testimonials
          </Link>
          <Link href="#" className="hover:text-primary hover:underline">
            Support
          </Link>
        </nav>
        <div className="flex gap-5">
          <ModeToggle />
          <Button>
            <DeviceMobileCameraIcon size={32} />
            Download App
          </Button>
          <Button onClick={() => router.push("/auth/login")}>
            Login
            <SignInIcon size={32} />
          </Button>
        </div>
      </header>

      {/*hero section*/}
      <section className="flex h-[95vh] items-center justify-center">
        <div className="flex w-[90vw] items-center justify-center gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="w-[35vw] text-6xl font-bold">
              Your Entire Campus,{" "}
              <span className="text-primary">In your pocket.</span>
            </h1>
            <p className="w-[30vw] text-lg">
              Stay organized with intuitive schedules, find the perfect study
              lounge in real time, and never miss a campus event. Designed for
              the modern student.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Button variant="outline">
                <DeviceMobileCameraIcon size={32} />
                Download App
              </Button>
              <Button>
                <PlayIcon size={32} />
                Watch Demo
              </Button>
            </div>
          </div>
          <img src="https://placehold.co/600x400" alt="hero-img" />
        </div>
      </section>

      {/*features section*/}
      <section>
        <h1 className="text-center text-lg text-primary">Built for Students</h1>
        <p className="text-center text-4xl font-bold">
          Supercharge your university life
        </p>
        <div className="flex justify-center">
          <div className="mx-20 mt-20 flex w-4/5 justify-between gap-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-fit rounded-full bg-primary/90 p-3 text-white">
                <CalendarDotsIcon size={25} />
              </div>
              <h1 className="text-xl">Smart Scheduling</h1>
              <p className="text-center">
                Never miss a lecture again with automatic sync and intelligent
                reminders.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-fit rounded-full bg-primary/90 p-3 text-white">
                <ArmchairIcon size={25} />
              </div>
              <h1 className="text-xl">Real-time Lounges</h1>
              <p className="text-center">
                Find the perfect study spot instantly with live availability
                maps.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-fit rounded-full bg-primary/90 p-3 text-white">
                <TicketIcon size={25} />
              </div>
              <h1 className="text-xl">Event Memories</h1>
              <p className="text-center">
                Relive the best moments with a digital timeline of your campus
                life.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-fit rounded-full bg-primary/90 p-3 text-white">
                <BowlFoodIcon size={25} />
              </div>
              <h1 className="text-xl">Dining and Menus</h1>
              <p className="text-center">
                Explore daily specials and nutritional info for all campus
                dining spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*testimonials section*/}
      <section className="mt-[20vh]">
        <div className="mx-20 flex gap-20">
          <div className="flex w-[45vw] flex-col gap-3 rounded-[25px] bg-secondary p-5">
            <h1 className="text-4xl">Connected Campus Ecosystem</h1>
            <p className="">
              UniCore integrates with your university's existing systems to
              provide a seamless, unified experience from registration to
              graduation.
            </p>
            <Link
              href="#"
              className="flex items-center gap-2 font-bold text-primary"
            >
              Learn how it works <ArrowRightIcon size={15} />
            </Link>
          </div>

          <div className="flex w-[45vw] flex-col items-center gap-5 bg-primary p-5">
            <ShieldCheckIcon size={50} weight="fill" className="text-white" />
            <h1 className="text-2xl text-white">
              98% Student Satisfaction Rate
            </h1>
            <p className="text-white">
              Join over 50,000 students across the country who have simplified
              their campus journey.
            </p>
          </div>
        </div>
      </section>

      {/*testimonial 2*/}
      <section className="mt-[20vh]">
        <h1 className="text-center text-4xl">What Students Are Saying</h1>
        <div className="mx-20 mt-10 grid grid-cols-4 gap-10">
          <div className="flex flex-col gap-5 border p-8">
            <div className="flex items-center gap-2">
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
            </div>
            <p className="italic">
              "UniCore has transformed my student life. The scheduling feature
              is a game-changer, and I love being able to find study lounges in
              real-time."
            </p>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://placehold.co/40x40"
                  alt="user-img"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold">Jane Doe</h1>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border p-8">
            <div className="flex items-center gap-2">
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
            </div>
            <p className="italic">
              "UniCore has transformed my student life. The scheduling feature
              is a game-changer, and I love being able to find study lounges in
              real-time."
            </p>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://placehold.co/40x40"
                  alt="user-img"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold">Jane Doe</h1>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border p-8">
            <div className="flex items-center gap-2">
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
            </div>
            <p className="italic">
              "UniCore has transformed my student life. The scheduling feature
              is a game-changer, and I love being able to find study lounges in
              real-time."
            </p>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://placehold.co/40x40"
                  alt="user-img"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold">Jane Doe</h1>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border p-8">
            <div className="flex items-center gap-2">
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
              <StarIcon size={25} weight="fill" className="text-primary" />
            </div>
            <p className="italic">
              "UniCore has transformed my student life. The scheduling feature
              is a game-changer, and I love being able to find study lounges in
              real-time."
            </p>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://placehold.co/40x40"
                  alt="user-img"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold">Jane Doe</h1>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-20 mt-40 flex items-center justify-center">
          <div className="flex h-[40vh] items-center justify-center rounded-lg bg-primary p-10">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-center text-5xl text-white">
                Join the UniCore Community Today.
              </h1>
              <div className="flex justify-center">
                <p className="w-[70%] text-center text-lg text-white">
                  Stop juggling multiple apps and platforms. UniCore brings
                  everything you need for a seamless campus experience into one
                  unified, intelligent platform.
                </p>
              </div>

              <div className="flex gap-5">
                <Button
                  variant="outline"
                  className="rounded-full text-primary dark:text-white"
                >
                  Create Your Account
                </Button>
                <Button className="rounded-full border-white">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-25 flex items-end justify-between border-t p-5 pt-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-primary">UniCore</h1>
          <p>&copy; {new Date().getFullYear()} UniCore. All rights reserved.</p>
        </div>
        <div className="flex gap-5 text-sm">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Cookie Policy</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </footer>
    </main>
  )
}
