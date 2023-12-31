import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const session = useSession();
const router = useRouter();

async function handleSignIn(){

  signIn('google', {callbackUrl: "http://localhost:3000/post"})
}

  return (
    <div>
    
    <div className='block md:flex justify-between items-center'>
    <div className='mt-56 max-w-2xl'>
      <h1 className='font-sans text-6xl font-semibold leading-normal'>Your 
      <span className='text-orange-400'> go-to</span> destination <br /> for 
      Weather Updates!</h1>
      
      <div className='flex justify-start pl-5 md:justify-start'><Button className='mt-10' onClick={() => (!session.data) ? handleSignIn() : router.push('/post')}>Get Started Now</Button></div>
      
    </div>
    <div className='mt-40 pr-10'>
      <img src="weather_icon-removebg-preview.png" alt="" />
    </div>
    </div>
    </div>
  ) 
}


