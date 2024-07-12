'use client';
import logo from "./LogoColmena.png"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';



const LinkItems = [  
    {link:"Inicio", linkRef:"/"},
    {link:"¿Qué es Colmena?", linkRef:"/#about"},
    {link:"Desarrollos", linkRef:"/#desarrollos"},
    {link:"Equipo", linkRef:"/#equipo"},
    {link:"Contacto", linkRef:"/#contacto"},
]


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-black bg-opacity-50'}`}>
      <div className="w-full mx-auto sm:px-6 lg:pl-24 sticky z-auto">
        <div className="flex px-5 items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link  href="/">
            <Image src={logo} width='200' alt="colmena-logo" priority="true"/>
            </Link>
          </div>

          {/* //Tablet y Desktop */}
          {/* //TODO: SI HAY TIEMPO AGREGAR SUBRAYADO DINAMICO */}
          <div className="hidden md:block px-16">
            <div className="flex items-baseline space-x-4">
              {LinkItems.map(l => {
                return <Link key={l.link} className={`${isScrolled ? 'text-black hover:text-green' : 'text-white'}  rounded-none delay-75 hover:border-b lg:px-4 px-2 py-0 rounded-md lg:text-base  text-sm font-medium`} href={l.linkRef} >{l.link}</Link>
              }
              )}
            </div>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className={`inline-flex items-center justify-center ${isScrolled ? 'text-grey' : 'text-white' } rounded-md  focus:outline-none focus:bg-gray-700 `}>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden  `}>
        <div className="px-2 pt-2 space-y-1 sm:px-3 bg-white">
          {LinkItems.map(l => {
            return <Link key={l.link} className={`border-b border-solid border-grey  text-black hover:text-orange block px-1 mx-6 py-7 text-center text-base font-medium`} href={l.linkRef}>{l.link}</Link>
          }
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;