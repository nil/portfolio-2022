import React from 'react';

// Converts from kebab case to normal text.
// It can uppercase the first letter or not.
const beautifyString = (str, capitalize = true) => (capitalize
  ? str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ')
  : str.replace(/-/g, ' '));

// Builds the content of the metadata section based on the input
const buildMetadataContent = (input) => {
  if (typeof input[0] === 'object') {
    return input.map((item) => {
      const skills = item.skill_roles.data.map((skill) => beautifyString(skill.attributes.name, false)).join(' & ');
      const content = <div>{item.name}{skills.length > 0 ? `, ${skills}` : ''}</div>;

      return item.website
        ? <a href={item.website} target='_blank' rel='noreferrer'>{content}</a>
        : <div key={item.id}>{content}</div>;
    });
  }

  if (Array.isArray(input)) {
    return input.map((item) => <div key={item}>{beautifyString(item)}</div>);
  }

  return <div>{input}</div>;
};

// React component
const Metadata = ({ category, content, lastChild }) => (
  <div className={lastChild ? '' : 'mb-xs'}>
    <div className='font-display text-brand-50'>{category}</div>
    {buildMetadataContent(content)}
  </div>
);

export default Metadata;
