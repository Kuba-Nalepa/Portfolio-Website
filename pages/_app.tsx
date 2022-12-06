import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col">
      {/* <Header /> */}
      <Component {...pageProps} />
    </div>
  )
}
