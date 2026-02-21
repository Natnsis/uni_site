import { howArray } from '@/constants/howItWorks';
import { Cog, Group, Hourglass } from 'lucide-react'

import Image from 'next/image';
const HowItWorks = () => {
  return (
    <section className="px-20 mt-15">
      <h1 className="text-center text-4xl">How it works</h1>
      <div className="flex justify-center mt-2">
        <p className="w-3/5 text-center">Smart Campus Assistant brings every part of academic life into one unified platform. Here’s how universities and students get started and stay connected.</p>
      </div>
      <div className='flex gap-5'>
        <div className='w-1/2'>
          <Image
            src="/how.png"
            alt="how-it-works"
            width={600}
            height={400}
          />
        </div>

        <div className="flex flex-col gap-5 w-1/2 py-5 p-5 items-center justify-center">
          {howArray.map((item, index) => (
            <div className='p-5 flex gap-5 w-full border-l' key={index}>
              <div className='flex items-center bg-primary text-white p-3 rounded-lg'>
                <item.icon size={50} />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <h1 className='font-bold text-lg'>{item.title}</h1>
                <p className='text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
