import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const {data: session, status} = useSession();
const router = useRouter();

  return (
    <div className='block md:flex justify-between items-center'>
    <div className='mt-56 max-w-2xl'>
      <h1 className='font-sans text-6xl font-semibold leading-normal'>Your 
      <span className='text-orange-400'> go-to</span> destination <br /> for 
      Weather Updates!</h1>
      <div className='flex justify-start pl-5 md:justify-start'><Button className='mt-10'>Get Started Now</Button></div>
      
    </div>
    <div className='mt-40 pr-10'>
      <img src="weather_icon-removebg-preview.png" alt="" />
    </div>
    </div>
    
  ) 
}


