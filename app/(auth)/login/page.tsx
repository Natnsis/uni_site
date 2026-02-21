"use client"
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserStar } from 'lucide-react'
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter()
  return (
    <main className='flex gap-10 h-screen items-center justify-center'>
      <div className='w-1/2 p-10 flex items-center justify-center'>
        <Image
          src="/auth.png"
          alt='login-img'
          width={600}
          height={600}
        />
      </div>
      <div className='w-1/2 p-10'>
        <h1 className='text-4xl text-center'>
          Administrative Access
        </h1>
        <p className='text-center text-sm px-10'>
          This portal is reserved for authorized university administrators and managers.
          Sign in to manage academic operations, oversee student data,
          and monitor campus activity securely.
        </p>
        <div className='h-50 m-5 rounded-lg px-10'>
          <div className='mb-2'>
            <p className='text-sm mb-1'>
              Username or Email
            </p>
            <Input />
          </div>

          <div className='mb-2'>
            <p className='text-sm mb-1'>
              Password
            </p>
            <Input />
          </div>

          <div className='flex justify-center'>
            <Button
              className='w-1/4'
              onClick={() => router.push('/dashboard')}
            >
              <UserStar />  Sign In
            </Button>
          </div>
        </div>
        <p className='text-xs text-center'>
          Access is restricted to approved institutional accounts.
        </p>
      </div>
    </main>
  )
}

export default page
