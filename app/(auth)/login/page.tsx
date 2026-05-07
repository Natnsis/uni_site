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
        <form action="" className='bg-background p-5 rounded-lg w-[35vw] border'>
          <div className='flex flex-col mb-4 items-center'>
            <h1 className='text-2xl text-center font-bold'>Uni-Core</h1>
            <p className='text-sm'>Admin Hub - Enter your dedicated University cridentials</p>
          </div>
          <div className='flex flex-col gap-3 mb-3'>
            <div>
              <p className='text-sm'>Email</p>
              <Input className='border-2' />
            </div>
            <div>
              <p className='text-sm'>Password</p>
              <Input className='border-2' />
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-3 items-center'>
                <Input type='checkbox' className='h-4 w-4' />
                <p className='text-xs'>Remember me</p>
              </div>

              <Button variant='link'>Forgot Password</Button>
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
