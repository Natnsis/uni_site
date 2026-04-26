import { Button } from './../components/ui/button.tsx'
import { Card } from './../components/ui/card.tsx'
import { ModeToggle } from './../components/mode-toggle.tsx'
import { 
  Play,
  Smartphone,
  Calendar,
  Armchair,
  PartyPopper,
  UtensilsCrossed,
  MoveUpRight,
  ShieldCogCorner,
  Star
} from 'lucide-react'

const Landing = () => {
  return (
    <main>
      <header className='flex justify-between items-center h-15 border-b-1 px-10'>
        <h1 className='text-primary font-bold text-2xl'>UniCore</h1>

        <nav className='flex gap-5'>
        <a className='hover:underline hover:text-primary hover:cursor-pointer text-sm'>Features</a>  
        <a className='hover:underline hover:text-primary hover:cursor-pointer text-sm'>Campus Life</a>  
        <a className='hover:underline hover:text-primary hover:cursor-pointer text-sm'>Testimonials</a>  
        <a className='hover:underline hover:text-primary hover:cursor-pointer text-sm'>Supports</a>  
        </nav>

        <div className='flex items-center gap-3'>
          <ModeToggle/>
          <Button>Download App</Button>
          <Button>Sign In</Button>
        </div>
      </header>
      
      {/* hero */}
      <section className='h-[70vh] p-20 flex items-center justify-center bg-secondary'>
        <div className='flex justify-between gap-10'>
          <div className='w-[40vw] h-[50vh] flex items-center justify-center'>
            <div>
            <div>
              <h1 className='text-5xl font-bold'>Your Entire Campus,</h1>
              <h1 className='text-5xl font-bold text-primary'>In Your Pocket.</h1>
            </div>
            <p className='w-[35vw] mt-5'>Stay organized with intuitive schedules. find the perfect study lounge in real-time. and never miss a campus event. Designed for the modern student.</p>
            <div className='flex gap-4 mt-5'>
              <Button className='rounded-full'> <Smartphone />Downlaod for android</Button>
              <Button className='rounded-full' variant='outline'><Play /> Watch Demo</Button>
            </div>
            </div>
          </div>

          <div className='w-[40vw] h-[50vh]'>
            <img src='/hero-img.png' />
          </div>
        </div>
      </section>
        
      {/* built for students*/}
      <section className='my-10'>
        <p className='text-primary text-xs text-center'>Built for students</p>
        <h1 className='text-2xl text-center font-bold'>Supercharge Your University Life</h1>
        <div className='flex items-center mt-15 justify-between mx-20'>
          <div className='w-[20vw] border rounded-sm p-5 h-[30vh]'>
            <div className='rounded-full bg-secondary w-fit p-2'>
              <Calendar className='text-primary' size={30}/>
            </div>
            <h1 className='text-lg font-bold my-5'>Smart Scheduling</h1>
            <p className='text-sm'>Never miss a lecture again with automatic sync and intelligent reminders</p>
          </div>

          <div className='w-[20vw] border rounded-sm p-5 h-[30vh]'>
            <div className='rounded-full bg-secondary w-fit p-2'>
              <Armchair className='text-primary' size={30}/>
            </div>
            <h1 className='text-lg font-bold my-5'>Real-time Lounges</h1>
            <p className='text-sm'>Find the perfect study spot with live occupancy tracking across all campus zones.</p>
          </div>

          <div className='w-[20vw] border rounded-sm p-5 h-[30vh]'>
            <div className='rounded-full bg-secondary w-fit p-2'>
              <PartyPopper className='text-primary' size={30}/>
            </div>
            <h1 className='text-lg font-bold my-5'>Event Memories</h1>
            <p className='text-sm'>Relive highlights and browse the community gallery from recent campus activities.</p>
          </div>

          <div className='w-[20vw] border rounded-sm p-5 h-[30vh]'>
            <div className='rounded-full bg-secondary w-fit p-2'>
              <UtensilsCrossed className='text-primary' size={30} />
            </div>
            <h1 className='text-lg font-bold my-5'>Dining & Menus</h1>
            <p className='text-sm'>Check today's cafeteria specials and nutrition info before you head over.</p>
          </div>
        </div>
      </section>

      {/* ecosystem*/}
      <section className='bg-secondary flex gap-10 justify-center p-5 py-10'>
        <Card className='w-3/6 py-10 px-5 rounded-lg'>
          <h1 className='text-xl'>Connected Campus Ecosystem</h1>
          <p className='w-[80%]'>UniCore integrates with your university's existing systems to provide a seamless, unified experience from registration to graduation.</p>
          <div className='flex justify-start'>
            <Button variant='ghost' className='text-primary pl-0'>Learn how it works <MoveUpRight /></Button>
          </div>
        </Card>
        <Card className='w-2/6 bg-primary'>
          <div className='flex justify-center'>
            <ShieldCogCorner size={40} className=''/>
          </div>
          <h1 className='text-center font-semibold text-xl'>98% Student Satisfaction</h1>
          <p className='px-10 text-center'>Join over 50,000 students across the country who have simplified their campus journey.</p>
        </Card>
      </section>
      
      {/* testimonials */}
      <section className='bg-secondary pt-15 pb-5'>
        <p className='text-center text-3xl'>What Students Are Saying</p>
        <div className='flex justify-between items-center mt-10 px-20 gap-10'>
          <Card className='border p-5 rounded-xl'>
            <div className='flex gap-2 mb-5'>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
            </div>
            <p>"UniCore completely changed how I manage my time. The real-time lounge occupancy is a lifesaver during finals week!"</p>
            <div className='flex gap-3 items-center'>
              <img src='/profile.png'  className='h-15 w-15 rounded-full'/>
              <div>
                <p className='text-lg'>Alex Rivera</p>
                <p className='text-xs'>Senior, Biology</p>
              </div>
            </div>
          </Card>

          <Card className='border p-5 rounded-xl'>
            <div className='flex gap-2 mb-5'>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
            </div>
            <p>"The dining menu feature is so convenient. I no longer walk all the way to the cafeteria just to see they're serving something I don't like."</p>
            <div className='flex gap-3 items-center'>
              <img src='/profile.png'  className='h-15 w-15 rounded-full'/>
              <div>
                <p className='text-lg'>Jordan Smith</p>
                <p className='text-xs'>Sophomore, Computer Science</p>
              </div>
            </div>
          </Card>

          <Card className='border p-5 rounded-xl'>
            <div className='flex gap-2 mb-5'>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
                <Star size={15} className='text-yellow-600'/>
            </div>
            <p>"Event Memories is my favorite feature. It's great to see all the photos from campus festivals and club meetups in one place."</p>
            <div className='flex gap-3 items-center'>
              <img src='/profile.png'  className='h-15 w-15 rounded-full'/>
              <div>
                <p className='text-lg'>Elena Chen</p>
                <p className='text-xs'>Freshman, Graphic Design</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* community */}
      <section className='mt-20 py-5 flex items-center justify-center'>
        <Card className='bg-primary px-5 w-[85%] py-10'>
          <h1 className='text-white text-center text-4xl'>
            Join The UniCore Community Today
          </h1>
          <p className='text-center text-white'>Stop juggling multiple apps and websites. Get everything you need for your university journey in one beautiful place.</p>
          <div className='flex items-center justify-center gap-5'>
            <Button variant='secondary' className='rounded-full text-primary'>Create Your Account</Button>
            <Button className='border-white border rounded-full'>Contact Support</Button>
          </div>
        </Card>
      </section>

      <footer className='border-t-1 p-5 flex justify-between mt-10'>
        <div>
          <h1 className='text-xl text-primary'>UniCore</h1>
          <p className='text-sm text-gray-500'>&copy; 2026 UniCore Technologies. All rights reserved.</p>
        </div>

        <div className='flex gap-5'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>
      </footer>

    </main>
  )
}

export default Landing
