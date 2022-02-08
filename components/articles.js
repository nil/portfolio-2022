import React from 'react';
import Link from 'next/link';

const Articles = ({ projects }) => (
  <div>
    <div className="uk-child-width-1-2@s">
      <div>
        {projects.map((article) => (
          <div className="card" key={article.id}>
            <Link href={`/project/${article.attributes.slug}`}>{article.attributes.title}</Link>
            <div>{article.attributes.extract}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Articles;
