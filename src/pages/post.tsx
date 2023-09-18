
import WeatherCard from '@/ui/weathercard';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

  
export default function PostSignup() {
return <div>
      <WeatherCard></WeatherCard>
    </div>
  
}
