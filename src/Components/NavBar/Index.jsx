'use client';
import logo from "./Colmena.png"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';



const LinkItems = [  
    {link:"Inicio", linkRef:"/"},
    {link:"Nosotros", linkRef:"#about"},
    {link:"Proyectos", linkRef:"#projects"},
    {link:"Contacto", linkRef:"#contact"},
]


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 fade-in-top">
      <div className="w-full mx-auto px-4 sm:px-6 lg:pl-24 sticky z-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link  href="/">
            <Image src={logo} width='200' alt="colmena-logo" priority="true"/>
            </Link>
          </div>

          {/* //Tablet y Desktop */}
          {/* //TODO: SI HAY TIEMPO AGREGAR SUBRAYADO DINAMICO */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {LinkItems.map(l => {
                return <Link key={l.link} className="text-black hover:text-green rounded-none delay-75 hover:border-b px-5 py-0 rounded-md text-base font-medium" href={l.linkRef} >{l.link}</Link>
              }
              )}
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-grey focus:outline-none focus:bg-gray-700 focus:text-white">
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden `}>
        <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
          {LinkItems.map(l => {
            return <Link key={l.link} className="border-b border-solid border-grey text-black hover:text-orange block px-1 mx-6 py-7 text-center text-base font-medium" href={l.linkRef}>{l.link}</Link>
          }
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;