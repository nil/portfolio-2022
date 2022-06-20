import React from 'react';

const Metadata = ({ category, content, lastChild }) => (
  <div className={lastChild ? '' : 'mb-xs'}>
    <div className='font-display text-brand-50'>{category}</div>
    <div className=''>{content}</div>
  </div>
);
export default Metadata;
