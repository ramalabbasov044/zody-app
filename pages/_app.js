import '@/styles/globals.css'
import "../config/i18next"
import '../styles/swiper.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         once: false,
       })
 }, [])
  return <Component {...pageProps} />
}
