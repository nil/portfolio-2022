import React, { useContext } from 'react';
import Metadata from '../../components/metadata';
import { fetchAPI } from '../../lib/api';
import Layout from '../_layout';
import { LocaleContext } from '../_app';

const Project = ({ project, metadataItems }) => {
  const projectText = useContext(LocaleContext).project;

  return (
    <Layout>
      {/* Header */}
      <section className='bg-slate-100'>
        <div className='wrapper py-xl'>
          <h1 className='inline-block font-display text-6xl text-brand-40'>{project.attributes.title}</h1>
        </div>
      </section>

      {/* Summary */}
      <section className='bg-slate-200 border-y border-slate-300'>
        <div className='wrapper grid grid-cols-12 grid-flow-col gap-x-s py-l'>
          <div className='col-span-8 text-xl'>
            {project.attributes.summary}
          </div>
          <div className='relative col-start-10 col-span-3 before:block before:absolute before:left-[-24px] before:h-full before:border-l before:border-brand-40'>
            {Object.keys(metadataItems).map((key, index) => (
              <Metadata
                category={projectText.metadata[key]}
                content={metadataItems[key]}
                lastChild={Object.keys(metadataItems).length === index + 1}
                key={key}
              />
            ))}

          </div>
        </div>
      </section>
    </Layout>
  );
};

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
  const projectsRes = await fetchAPI('/projects', {
    filters: {
      slug: { $eq: context.params.slug },
    },
    locale: context.locale,
    populate: ['*', 'coverImage', 'skill_roles', 'team.skill_roles', 'blocks'],
  });

  return {
    props: {
      project: projectsRes.data[0],
      metadataItems: {
        year: projectsRes.data[0].attributes.year,
        client: projectsRes.data[0].attributes.client,
        role: projectsRes.data[0].attributes.skill_roles.data.map((item) => item.attributes.name),
        team: projectsRes.data[0].attributes.team,
      },
    },
    revalidate: 1,
  };
}

export default Project;
