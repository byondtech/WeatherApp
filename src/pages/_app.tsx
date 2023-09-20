import Head from 'next/head'
import '@/styles/globals.css'
import NavigationMenuDemo from '@/ui/header'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-slate-100 min-h-screen md:px-40 md:py-5'>
    <Head>
        <title>WeatherLy</title>
        <meta property="og:title" content="My page title" key="WeatherLy" />
      </Head>
    <SessionProvider session={pageProps.session}>
  <NavigationMenuDemo></NavigationMenuDemo>
  <Component {...pageProps} />
  </SessionProvider>
  </div>
}
