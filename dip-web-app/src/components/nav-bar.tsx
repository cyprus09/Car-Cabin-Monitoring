"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const fontStyles = {
    fontFamily: 'Roboto, sans-serif', 
    fontSize: '2 rem',
    fontWeight: 'bold', 
    color: '#7E22CE', 
  };

  return (
    <div>
      <nav className="w-full h-15 bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h1 style={fontStyles}>Car-Cabin-Monitoring System</h1>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-l text-black py-3 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="https://blogs.ntu.edu.sg/ee3180-2324s1-e007" target="_blank" onClick={() => setNavbar(!navbar)}>
                    Group Blogs
                  </Link>
                </li>
                <li className="pb-6 text-l text-black py-3 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" target="_blank" onClick={() => setNavbar(!navbar)}>
                    Documentation
                  </Link>
                </li>
                <li className="pb-6 text-l text-black py-3 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" target="_blank" onClick={() => setNavbar(!navbar)}>
                    Contacts
                  </Link>
                </li>
                <li className="pb-6 text-l text-black py-3 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="https://github.com/cyprus09/Car-Cabin-Monitoring" target="_blank" onClick={() => setNavbar(!navbar)}>
                    GitHub
                  </Link>
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