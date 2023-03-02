import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[color:var(--bg-color)]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}