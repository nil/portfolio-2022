import React from 'react';

const Articles = ({ projects }) => (
  <div>
    <div className="uk-child-width-1-2@s">
      <div>
        {projects.map((article) => (
          <div className="card" key={article.id}>
            <b>{article.attributes.title}</b>
            <div>{article.attributes.extract}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Articles;
