import React from 'react';
import Language from '../components/language';
import Navbar from '../components/navbar';

const LayoutOld = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default LayoutOld;
