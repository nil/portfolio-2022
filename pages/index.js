import React from 'react';
import Link from 'next/link';
import Articles from '../components/articles';
import Layout from './_layout';
import { fetchAPI } from '../lib/api';

const Home = ({ projectCollection }) => (
  <Layout>
    <div className='wrapper mt-xl text-brand-60'>
      <h1 className='text-3xl text-brand-40'>Nil Vila</h1>
      <p className='text-3xl mt-s'>Hola! Sóc un dissenyador gràfic de Barcelona, centrat en crear expriències digitals per pantalles i en tipografies, exprimint el potencial de la tecnologia per humanitzar-nos.</p>
      <p className='text-m mt-m mb-xl'>Hola! Nil Vila és un dissenyador gràfic de Barcelona, centrat en crear expriències digitals per pantalles i en tipografies, exprimint el potencial de la tecnologia per humanitzar-nos. Hola! Nil Vila és un dissenyador gràfic de Barcelona.</p>
      {/* <div className='bg-brand-40 h-[128px] mb-xl'></div> */}
      <div>
        {projectCollection.map(({ attributes }) => (
          <Link key={attributes.id} href={`/project/${attributes.slug}`}>
            <h1 className='mb-l text-5xl underline cursor-pointer hover:text-brand-40'>{attributes.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export async function getStaticProps(context) {
  // Run API calls in parallel
  const [projectCollectionRes] = await Promise.all([
    fetchAPI('/projects', { populate: '*', locale: context.locale }),
  ]);

  return {
    props: {
      projectCollection: projectCollectionRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
