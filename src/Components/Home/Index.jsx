'use client'
import React from 'react';
import Link from 'next/link';
import LogoLandin from './LogoLanding.png';
import LogoBlanco from "./LogoBlanco.png"
import Image from 'next/image';
 
const Home = () => {
    return (
        <div className="bg-black bg-opacity-50 ms:h-dvh sm:h-screen text-center flex justify-center flex-col" id="home">
            <div className="flex-col py-20 items-center text-center text-white pt-40 fade-in-bottom">
                <Image src={LogoBlanco} className="m-auto" width="900" alt="colmena-espacio+comunidad"/>
            </div>
            <div className="flex flex-wrap text-center  items-center justify-center pb-14 fade-in-bottom">
                <Link className="text-white w-auto hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 my-2 mx-5 font-medium" href="#about">¿que es Colmena?</Link>
                <Link className="text-white w-auto hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 my-2 mx-5 font-medium" href="#desarrollos">Desarrollos</Link>
            </div>
        </div>
    )
}

export default Home; 