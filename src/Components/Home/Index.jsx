'use client'
import React from 'react';
import Link from 'next/link';

const Home = () => {
    return(
        <div className="bg-greenlight sm:h-screen" id="home">
        <div className="flex-col py-20 items-center text-center text-white pt-40">
            <h1 className="text-6xl md:text-8xl py-2 tracking-widest">Colmena</h1>
            <h4 className="text-base md:text-4xl py-1 tracking-widest">Espacio + Comunidad</h4>
        </div>
        <div className="block my-18 text-center">
            <Link className="text-white w-48 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 my-5 font-medium" href="#about">Nosotros</Link>
            <Link className="text-white w-48 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 my-5 font-medium" href="#projects">Proyectos</Link>
        </div>
        </div>
    )
}

export default Home; 