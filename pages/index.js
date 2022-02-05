import React from 'react';
import Link from 'next/link';
import Articles from '../components/articles';
import Layout from './_layout';
import { fetchAPI } from '../lib/api';

const Home = ({ projects, categories }) => (
  <Layout categories={categories}>
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>Index</h1>
        <Articles projects={projects} />
        <Link href="/about">About</Link>
      </div>
    </div>
  </Layout>
);

export async function getStaticProps(context) {
  // Run API calls in parallel
  const [projectsRes] = await Promise.all([
    fetchAPI('/projects', { locale: context.locale }),
  ]);

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
