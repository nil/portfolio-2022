import React from 'react';
import Nav from './nav';

const LayoutOld = ({ children, categories }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default LayoutOld;
