import { Button } from '@/components/ui/button';
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-secondary '>
      <div className="h-40 px-20 py-5 flex justify-between">
        <div className='w-1/3'>
          <div className='flex items-center gap-3'>
            <Image
              src="/logo.png"
              alt='logo-img'
              height={50}
              width={50}
            />
            <h1 className='font-bold'>StudySphare</h1>
          </div>
          <p className='text-sm'>
            A unified digital platform designed to modernize
            campus operations and enhance student academic life.
          </p>
        </div>

        <div>
          <h1 className='font-bold'>Info</h1>
          <div className='flex flex-col items-start text-sm mt-2 gap-2'>
            <Link href="/">+251903259444</Link>
            <Link href="/">nsisay49@gmail.com</Link>
            <Link href="/">nsisay360@gmail.com</Link>
          </div>
        </div>

        <div>
          <h1 className='font-bold'>Social</h1>
          <div className='flex flex-col items-start'>
            <Button variant="link">Telegram</Button>
            <Button variant="link">Email</Button>
            <Button variant="link">LinkedIn</Button>
          </div>
        </div>
      </div>
      <p className='text-center text-xs'>2026 Copyright &copy; 2026 All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
