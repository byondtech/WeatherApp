
import WeatherCard from '@/ui/weathercard';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { NextApiRequest } from 'next';

  
export default function PostSignup() {
return <div>
      <WeatherCard></WeatherCard>
    </div>
  
}

export async function getServerSideProps({req}: { req: NextApiRequest }){
  const session = await getSession({req})

  if(!session){
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return{
    props:{session}
  }
}
