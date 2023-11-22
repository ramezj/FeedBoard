import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data:session } = useSession();
  return (
    <div className='bg-black h-screen'>
    <Navigation session={session}/>
    <center>
    <div className='w-1/2'>
      <br />
      <h1 className='text-white text-6xl font-bold'>Centralized feedback board for Decentralized feedback</h1>
    </div>
    </center>
    </div>
  )
}
