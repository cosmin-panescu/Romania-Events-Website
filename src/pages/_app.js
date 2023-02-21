import '../styles/globals.css'
import '../styles/general.scss'
import MainLayout from './components/layout/MainLayout'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
