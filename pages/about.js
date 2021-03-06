import React, { useContext } from 'react';
import Link from 'next/link';
import Layout from './_layout';
import { LocaleContext } from './_app';

const About = () => {
  const { helloWorld } = useContext(LocaleContext);

  return (
    <Layout>
      <h1 className='text-3xl font-bold underline italic'>about, {helloWorld}</h1>
      <Link href="/">home</Link>
    </Layout>
  );
};

export default About;
