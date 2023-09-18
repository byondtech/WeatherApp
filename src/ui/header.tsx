"use client"
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { signIn,useSession,signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { redirect } from "next/navigation"


export default function NavigationMenuDemo() {
  const session = useSession();
  const router = useRouter();

  if(!session.data)
  return (
    <div className="mx-auto  py-5">
    <div className="flex justify-between items-center">
        <a href="/">
        <div className="flex items-center space-x-2 shadow-lg text-lg" >
        <svg className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
         <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
        <span className="font-[450]">Weather- <span className="font-[500]">ly</span></span>
        </div>
        </a>

        <div>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <Button className = "text-md " variant={'link'} onClick={() => signIn()}>SignIn </Button>
          <NavigationMenuContent>
            
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Button className = "text-md hover:bg-[#0b2f47] " variant={'default'} size={"sm"}>Get Started</Button>
         </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </div>
    </div>
  )
  if(session.data)
  return <div className="mx-auto  py-5">
    <div className="flex justify-between items-center">
        <a href="/">
        <div className="flex items-center space-x-2 shadow-lg text-lg" >
        <svg className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
         <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
        <span className="font-[450]">Weather- <span className="font-[500]">ly</span></span>
        </div>
        </a>

        <div>
          
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        
        <Button className = "text-md " variant={'link'} onClick={async () => {
            await signOut(); // Sign out the user
            router.push('/'); // Redirect to the home page
          }}>
          SignOut
          </Button>
        
          <NavigationMenuContent>
            
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        
        
        {/* @ts-ignore */}
        
        <Avatar className="w-11 h-11"><AvatarImage src ={session.data.user.image} />
        
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
         </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </div>
    </div>
}

