import React from 'react';
import { fetchAPI } from '../../lib/api';
import Layout from '../_layout';

const Article = ({ article }) => (
    <Layout>
      <h1 className='text-7xl font-bold'>Article, {article.attributes.title}</h1>
      <p className='bg-blue-100 text-blue-800 py-10 px-5'>{article.attributes.extract}</p>
    </Layout>
);

// Get all possible paths (slugs) to gnerate the static pages. (I think)
export async function getStaticPaths(context) {
  const projectsRes = await fetchAPI('/projects', { fields: ['slug', 'locale'], locale: context.locale });

  return {
    paths: projectsRes.data.map((project) => context.locales.map((locale) => ({
      params: { slug: project.attributes.slug },
      locale,
    }))).flat(),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const articlesRes = await fetchAPI('/projects', {
    filters: {
      slug: { $eq: context.params.slug },
    },
    locale: context.locale,
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Article;
