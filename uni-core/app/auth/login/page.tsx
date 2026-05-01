'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  return (
    <main className="bg-grid-fade flex items-center justify-center">
      <div className="p-5 h-[40vh] w-[80vw] flex gap-20 items-center justify-center">
        <form action="" className='bg-background p-5 rounded-lg px-20'>
          <div className='flex gap-5 items-end mb-4'>
            <h1 className='text-2xl text-center'>Uni-Core</h1>
            <p>Admin Hub</p>
          </div>
          <div className='flex flex-col gap-3 mb-3'>
            <div>
              <p className='text-sm'>enter your email</p>
              <Input />
            </div>
            <div>
              <p className='text-sm'>enter your password</p>
              <Input />
            </div>
          </div>
          <Button className='w-full' onClick={() => router.push('/dashboard')}>Login</Button>
        </form>
        <Image src='/login.jpg' alt='login-jpg' width={200} height={400} className='w-[40vh]' />
      </div>
    </main>
  )
}

export default Login 
