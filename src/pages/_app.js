import { GlobalStyle } from '../styles/global'
import { Analytics } from '@vercel/analytics/react'

GlobalStyle()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
