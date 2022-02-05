import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"
import {useRouter} from 'next/router';

// Import locale translated text
import ca from '../locales/ca'
import en from '../locales/en'
import es from '../locales/es'

// Store Strapi Global object in context
export const LocaleContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const locales = { ca, en, es };
  const router = useRouter();

  return (
    <>
      <LocaleContext.Provider value={locales[router.locale]}>
        <Component {...pageProps} />
      </LocaleContext.Provider>
    </>
  )
}

export default MyApp