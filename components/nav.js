import React from 'react';
import Link from 'next/link';

const Nav = () => (
    <div>
      <nav className="uk-navbar-container">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
);

export default Nav;
