"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Contacts } from './contacts';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const fontStyles = {
    fontFamily: 'Roboto, sans-serif', 
    fontSize: '1.25rem',
    fontWeight: 'bold', 
    color: 'rgb(255, 207, 49)', 
  };

  return (
    <div>
      <nav className="w-full h-15 bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/">
                  <h1 style={fontStyles}>🚖 Car-Cabin-Monitoring System</h1>
                </Link>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-l text-black py-3 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-500 hover:bg-transparent">
                  <Contacts/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;