import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import HomePage from '../../components/home';
import { previewData } from "next/headers";
import { Head } from 'next/document';

export default function App({ Component, pageProps }: AppProps) {
  
  

  return (
  <ChakraProvider>
    
    <Component {...pageProps} />
    <Analytics />

  </ChakraProvider>
  
  
  )
}
