import React from 'react';
import Language from '../components/language';
import Nav from '../components/nav';

const LayoutOld = ({ children }) => (
  <>
    <Nav />
    <Language />
    {children}
  </>
);

export default LayoutOld;
