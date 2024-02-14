'use client'
import React from 'react';
import Link from 'next/link';

const Home = () => {
    return(
        <div className="bg-greenlight h-fit sm:h-screen text-center" id="home">
        <div className="flex-col py-20 items-center text-center text-white pt-40">
            <h1 className="text-6xl md:text-8xl py-2 tracking-widest">Colmena</h1>
            <h4 className="text-base md:text-4xl py-1 tracking-widest">Espacio + Comunidad</h4>
        </div>
        <div className="flex flex-wrap my-18 text-center justify-center pb-10">
            <Link className="text-white w-52 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-5 my-5 font-medium" href="#about">Nosotros</Link>
            <Link className="text-white w-52 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-5 my-5 font-medium" href="#projects">Proyectos</Link>
        </div>
        </div>
    )
}

export default Home; 