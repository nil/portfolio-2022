import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Language = () => {
  const router = useRouter();

  return (
    <div>
      <Link href={router.asPath} locale="en">English</Link>
      <Link href={router.asPath} locale="ca">Català</Link>
      <Link href={router.asPath} locale="es">Español</Link>
    </div>
  );
};

export default Language;
