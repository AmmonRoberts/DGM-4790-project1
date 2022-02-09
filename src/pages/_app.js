import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

function MyApp({ Component, pageProps }) {
  return <>
     <Head>
        <title>Magic: The Gathering Deck Builder</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <ResponsiveAppBar/>
      <Component {...pageProps}/>
      </>
}

export default MyApp