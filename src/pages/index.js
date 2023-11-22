import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black h-screen'>
    <Navigation />
    <center>
    <div className='w-3/4'>
      <br />
      <h1 className='text-white text-5xl font-bold'>Centralized feedback management for decentralized feedback</h1>
    </div>
    </center>
    </div>
  )
}
