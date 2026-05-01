import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Login = () => {
  return (
    <main className="bg-grid-fade flex items-center justify-center">
      <div className="p-5 h-[40vh] w-[80vw] flex gap-20 items-center justify-center">
        <form action="" className='bg-background p-5 rounded-lg'>
          <h1 className='text-2xl text-center'>Welcome!</h1>
          <p className='text-center mx-5'>Please enter your credentails to enter</p>
          <div className='flex flex-col gap-3 mb-3'>
            <div>
              <p>Email</p>
              <input className='border bg-secondary w-full' />
            </div>
            <div>
              <p>Password</p>
              <input className='border bg-secondary w-full' />
            </div>
          </div>
          <Button className='w-full'>Login</Button>
        </form>
        <Image src='/login.jpg' alt='login-jpg' width={200} height={400} className='w-[40vh]' />
      </div>
    </main>
  )
}

export default Login 
