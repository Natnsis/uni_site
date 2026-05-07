'use client'

import Image from 'next/image';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react';

const page = () => {
  const images = [
    {
      src: '/not-found.png',
      title: '2025 graduation image'
    },
    {
      src: '/not-found.png'
    },
    {
      src: '/not-found.png'
    },
    {
      src: '/not-found.png'
    },
    {
      src: '/not-found.png'
    },
    {
      src: '/not-found.png'
    },
    {
      src: '/not-found.png'
    },
    {
      src: '/not-found.png'
    },
  ]

  return (
    <div className="p-5">
      <h1 className='text-center text-4xl'>Take a Look around</h1>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 p-4">
        {images.map((i, index) => (
          <Drawer direction='right' key={index}>
            <DrawerTrigger className="mb-4 break-inside-avoid">
              <Image
                src={i.src}
                alt="Gallery item"
                className="w-full h-auto rounded-lg border-2 border-black"
                width={300}
                height={300}
              />
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className='font-bold text-center text-xl'>2025 Graduation</DrawerTitle>
                <DrawerDescription className='text-center'>best day of the year almost all of the 2025 students graduated with grace</DrawerDescription>
                <Image src='/not-found.png' alt='drawer-image' width={200} height={200} className='w-full' />
                <div className='mt-5 flex gap-5'>
                  <Button className='w-[45%]'><PencilIcon /> Edit</Button>
                  <Button className='w-[45%]' variant='destructive'><TrashIcon /> Delete</Button>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose className='bg-black text-white py-2 font-bold'>
                  Close
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </div>
  )
}

export default page
