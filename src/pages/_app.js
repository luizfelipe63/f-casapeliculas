import { GlobalStyle } from '../styles/global'

GlobalStyle()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
