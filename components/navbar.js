import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LocaleContext } from '../pages/_app';

const Navbar = () => {
  const router = useRouter();
  const { navbar } = useContext(LocaleContext);

  const pageLinks = [
    { labelKey: 'projects', path: '/', pathCheck: 'project' },
    { labelKey: 'about', path: '/about' },
  ];

  const socialLinks = [
    { label: 'Instagram', link: 'https://instagram.com/nilvilam' },
  ];

  function testPath(str) {
    const regex = new RegExp(`^/${str}($|/)`, 'g');
    return regex.test(router.asPath);
  }

  return (
    <nav className='py-[24px] text-s border-b border-slate-200'>
      <div className='wrapper flex'>
        <div className="flex-1">
          {pageLinks.map(({ labelKey, path, pathCheck }, index) => (
            <Link href={path} key={labelKey}>
              <a className={`
                ${pageLinks.length !== index ? 'mr-s' : ''}
                ${testPath(pathCheck || labelKey) ? 'underline' : ''}
              `}>{navbar[labelKey]}</a>
            </Link>
          ))}
        </div>

        <Link href="/">
          <a className="flex text-brand-40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-current h-[24px] cursor-pointer'>
              <path d="M.534 20.995l3.432 1.51 4.074-9.258 3.744 8.508h3.432l8.25-18.75-3.432-1.51-6.534 14.85-6.534-14.85-3.432 1.51 2.458 5.586L.534 20.995z"/>
            </svg>
            <span className="pl-2xs font-display text-current">Nil Vila Martos</span>
          </a>
        </Link>

        <div className="flex-1 text-right">
          <div className='inline-block'>
            <Link href={router.asPath} locale="en">EN </Link>
            <Link href={router.asPath} locale="ca">CA </Link>
            <Link href={router.asPath} locale="es">ES</Link>
          </div>
          {socialLinks.map(({ label, link }, index) => (
            <a href={link} key={label} className={socialLinks.length !== index ? 'ml-s' : ''} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
