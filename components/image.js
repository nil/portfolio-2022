import React from 'react';
import NextImage from 'next/image';
import getStrapiMedia from '../lib/media';

const Image = ({ image }) => {
  const {
    alternativeText, width, height,
  } = image.data.attributes;

  const loader = () => getStrapiMedia(image);

  return (
    <NextImage
      loader={loader}
      layout='responsive'
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
