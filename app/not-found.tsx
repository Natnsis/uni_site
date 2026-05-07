'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter();
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div>
        <Image src='/not-found.png' alt='not-found-img' width={400} height={200} />
        <h1 className='text-4xl font-bold text-center'>Page Not Found</h1>
        <div className='flex justify-center mt-5'>
          <Button variant='outline' onClick={() => router.push('/')}>Go Back</Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
