import '@/styles/globals.css'
import NavigationMenuDemo from '@/ui/header'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-slate-100 min-h-screen md:px-40 md:py-5'>
    <SessionProvider session={pageProps.session}>
  <NavigationMenuDemo></NavigationMenuDemo>
  <Component {...pageProps} />
  </SessionProvider>
  </div>
}
