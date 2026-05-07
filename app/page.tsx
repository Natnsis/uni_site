'use client'

import AvatarGroupExample from "@/components/AvatarGroups"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRightIcon, BarcodeIcon, CalendarBlankIcon, CubeTransparentIcon, DropboxLogoIcon, EnvelopeSimpleIcon, FacebookLogo, FacebookLogoIcon, GraduationCapIcon, InstagramLogoIcon, LightningIcon, LinkedinLogoIcon, PhoneOutgoingIcon, ShieldStarIcon, StudentIcon, SunIcon, TelegramLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Landing = () => {
  const router = useRouter();
  return (
    <div>
      <section className="bg-grid-fade min-h-screen">
        <header className="flex justify-between px-20 py-5 items-center">
          <div className="flex gap-20 items-center">
            <h1 className="text-lg font-bold">UniCore</h1>
            <div className="flex gap-5 text-sm">
              <h1>Features</h1>
              <h1>Campus Life</h1>
              <h1>Testimonials</h1>
              <h1>Support</h1>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Button size='icon'><SunIcon size={32} /></Button>
            <Button>Downlaod App</Button>
            <Button onClick={() => router.push('/login')}>Login</Button>
          </div>
        </header>

        <section className="h-[70vh] flex items-center justify-center">
          <div className="flex flex-col gap-5 items-center">
            <Badge className="text-xs">
              <LightningIcon />
              CREATE FOR FAST
            </Badge>
            <h1 className="text-6xl w-[55vw] text-center font-extrabold">
              Your Entire Campus,In Your Pocket.
            </h1>
            <p className="w-[45vw] text-center">
              Stay organized with intuitive schedules, find the perfect
              study lounge in real-time, and never miss a campus event.
              Designed for the modern student.
            </p>

            <div className="flex gap-10">
              <Button>Download for Android</Button>
              <Button variant='outline'>Get a Demo</Button>
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-10 mx-25 items-center">
          <div className="flex gap-2 flex-col">
            <p className="text-sm">More than 100+</p>
            <p className="text-xs">Companies partner</p>
          </div>

          <p>HubSpot</p>

          <div className="flex gap-2 items-center">
            <DropboxLogoIcon size={32} />
            Drop box
          </div>

          <div className="flex gap-2 items-center">
            <CubeTransparentIcon size={32} />
            Square
          </div>

          <div className="flex gap-2 items-center">
            <GraduationCapIcon size={32} />
            Assosa University
          </div>

          <div className="flex gap-2 items-center">
            <StudentIcon size={32} />
            Adiss University
          </div>
        </div>
      </section>

      <section className="mt-20 bg-radial-top">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <Badge><BarcodeIcon /> FEATURES</Badge>
            <h1 className="text-5xl w-[50vw] text-center">Latest advanced technologies to supercharge univerisity life</h1>

            <div className="grid grid-cols-3 gap-10 w-[80vw] mt-10">
              <div className="border p-5">
                <div className="flex gap-5 items-center p-3 justify-center">
                  <CalendarBlankIcon size={32} />
                </div>
                <h1 className="text-xl text-center">Smart Scheduling</h1>
                <p className="text-center mx-5 text-sm">Never miss a lecture again with
                  automatic sync and intelligent
                  reminders.
                </p>
              </div>

              <div className="border p-5">
                <div className="flex gap-5 items-center p-3 justify-center">
                  <CalendarBlankIcon size={32} />
                </div>
                <h1 className="text-xl text-center">Smart Scheduling</h1>
                <p className="text-center mx-5 text-sm">Never miss a lecture again with
                  automatic sync and intelligent
                  reminders.
                </p>
              </div>

              <div className="border p-5">
                <div className="flex gap-5 items-center p-3 justify-center">
                  <CalendarBlankIcon size={32} />
                </div>
                <h1 className="text-xl text-center">Smart Scheduling</h1>
                <p className="text-center mx-5 text-sm">Never miss a lecture again with
                  automatic sync and intelligent
                  reminders.
                </p>
              </div>

              <div className="border p-5">
                <div className="flex gap-5 items-center p-3 justify-center">
                  <CalendarBlankIcon size={32} />
                </div>
                <h1 className="text-xl text-center">Smart Scheduling</h1>
                <p className="text-center mx-5 text-sm">Never miss a lecture again with
                  automatic sync and intelligent
                  reminders.
                </p>
              </div>

              <div className="border p-5">
                <div className="flex gap-5 items-center p-3 justify-center">
                  <CalendarBlankIcon size={32} />
                </div>
                <h1 className="text-xl text-center">Smart Scheduling</h1>
                <p className="text-center mx-5 text-sm">Never miss a lecture again with
                  automatic sync and intelligent
                  reminders.
                </p>
              </div>

              <div className="border p-5">
                <div className="flex gap-5 items-center p-3 justify-center">
                  <CalendarBlankIcon size={32} />
                </div>
                <h1 className="text-xl text-center">Smart Scheduling</h1>
                <p className="text-center mx-5 text-sm">Never miss a lecture again with
                  automatic sync and intelligent
                  reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grid-bottom-fade mt-20 px-20">
        <div className="flex justify-center mb-10"><Badge>CONTACT</Badge></div>
        <div className="flex gap-5">
          <Card className="w-3/5 p-5">
            <h1 className="text-2xl">Connected Campus Ecosystem</h1>
            <p className="w-[80%]">
              UniCore integrates with your university's existing systems to
              provide a seamless, unified experience from registration to
              graduation.
            </p>
            <Button className='w-fit'>Learn how it works <ArrowRightIcon size={32} /></Button>
          </Card>
          <Card className="w-2/5 p-5 flex flex-col items-center">
            <ShieldStarIcon size={32} />
            <h1 className="text-2xl">98% Student Satifaction</h1>
            <p className="px-20 text-center">Join over 50,000 students accross the country who have simplified their campus journey.</p>
          </Card>
        </div>

        <div className="mt-10 border p-5 bg-gray-50 flex flex-col items-center gap-5">
          <h1 className="text-3xl">Join the unicore community today.</h1>
          <p className="w-[40vw] text-center text-sm">Contact us for any feedback of improvement ideas and more of a cool projects from the same developer.</p>
          <div className="flex gap-10">
            <Button
              variant="outline"
            >
              <FacebookLogo size={32} weight="regular" />
            </Button>

            <Button
              variant="outline"
            >
              <TelegramLogoIcon size={32} />
            </Button>
            <Button
              variant="outline"
            >
              <EnvelopeSimpleIcon size={32} />
            </Button>
            <Button
              variant="outline"
            >
              <XLogoIcon size={32} />
            </Button>
            <Button
              variant="outline"
            >
              <InstagramLogoIcon size={32} />
            </Button>
          </div>
        </div>

        <div className="mt-10 flex justify-between gap-20 mb-10">
          <div className="w-full bg-white/70">
            <div className="bg-secondary p-5 flex flex-col items-center gap-3 border-b">
              <h1 className="text-2xl font-semibold">Smart notifications</h1>
              <p className="text-sm text-center w-[70%]">Easily accessible notificatoin from the notification center, calendar or email with the relevant activities</p>
            </div>

            <div className="flex flex-col">
              <div className="p-5">
                <h1 className="font-bold">Email notification</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa </p>
              </div>

              <div className="p-5">
                <h1 className="font-bold">Email notification</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa </p>
              </div>

              <div className="p-5">
                <h1 className="font-bold">Email notification</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa </p>
              </div>
            </div>
          </div>

          <div className="w-full bg-white/70">
            <div className="bg-secondary p-5 flex flex-col items-center gap-3 border-b">
              <h1 className="text-2xl font-semibold">Smart notifications</h1>
              <p className="text-sm text-center w-[70%]">Easily accessible notificatoin from the notification center, calendar or email with the relevant activities</p>
            </div>

            <div className="flex flex-col">
              <div className="p-5">
                <h1 className="font-bold">Email notification</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa </p>
              </div>

              <div className="p-5">
                <h1 className="font-bold">Email notification</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa </p>
              </div>

              <div className="p-5">
                <h1 className="font-bold">Email notification</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grid-top-fade px-20 pt-20">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-6xl font-extrabold">``</h1>
          <p className="text-3xl font-semibold w-1/2 text-center">"Clause is helping our company to decrease operational expenses and turnaround time, while increasing the compliance,
            resource allocation and effectiveness of our contract management."
          </p>
          <div className="flex flex-col gap-5 items-center">
            <AvatarGroupExample />
            <div>
              <h1 className="font-bold text-center">Dartline Robenson</h1>
              <p className="text-sm font-light">Head of Department heads</p>
            </div>
          </div>
        </div>

        <div className="px-20 mt-20 flex justify-between">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">2021</h1>
            <p>Clause Funded</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-5xl">50K+</h1>
            <p>Active Users</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-5xl">1k+</h1>
            <p>Company Partners</p>
          </div>
        </div>
      </section>

      <footer className="bg-black px-20 h-[40vh]">
        <div className="flex justify-between text-white  pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">UniCore</h1>
            <div>
              <div className="flex gap-2 items-center"><EnvelopeSimpleIcon size={20} /> nsisay49@gmail.com</div>
              <div className="flex gap-2 items-center"><PhoneOutgoingIcon size={20} /> +251903259444</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Solution</h1>
            <div className="flex flex-col gap-2 text-sm">
              <a href="">Why us</a>
              <a href="">Features</a>
              <a href="">Testimonials</a>
              <a href="">Security</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Customers</h1>
            <div className="flex flex-col gap-2 text-sm">
              <a href="">Procurement</a>
              <a href="">Sales</a>
              <a href="">Legal</a>
              <a href="">Mediuam</a>
              <a href="">Enterprise</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Resources</h1>
            <div className="flex flex-col gap-2 text-sm">
              <a href="">Pricing</a>
              <a href="">Contact Sales</a>
              <a href="">Changelogs</a>
              <a href="">Blog</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <p className="text-white text-sm flex items-center">&copy; Copyright 2026 all rights reserved</p>
          <div className="gap-3 flex">
            <Button><InstagramLogoIcon size={32} /></Button>
            <Button><LinkedinLogoIcon size={32} /></Button>
            <Button><YoutubeLogoIcon size={32} /></Button>
            <Button><TelegramLogoIcon size={32} /></Button>
          </div>
        </div>
      </footer>

    </div >
  )
}

export default Landing
