import React, { createContext } from 'react';
import { useRouter } from 'next/router';

// Import locale translated text
import ca from '../locales/ca.json';
import en from '../locales/en.json';
import es from '../locales/es.json';

// Tailwind CSS
import '../assets/styles/global.css';

// Store Strapi Global object in context
export const LocaleContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const locales = { ca, en, es };
  const router = useRouter();

  return (
    <>
      <LocaleContext.Provider value={locales[router.locale]}>
        <Component {...pageProps} />
      </LocaleContext.Provider>
    </>
  );
};

export default MyApp;
