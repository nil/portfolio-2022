import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
