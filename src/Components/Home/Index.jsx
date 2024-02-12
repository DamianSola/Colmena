'use client'
import React from 'react';

const Home = () => {
    return(
        <div className="bg-[url('https://www.genus.com.py/wp-content/uploads/2021/11/edificios-desarrollador-inmobiliario-Genus-1-scaled.jpg')] bg-no-repeat bg-cover sm:h-screen w-screen" >
        <div className="flex-col py-20 items-center text-center text-white">
            <h1 className="text-6xl md:text-8xl py-2 tracking-widest">Colmena</h1>
            <h4 className="text-base md:text-4xl py-1 tracking-widest">Espacio + Comunidad</h4>
        </div>
        {/* <div className="block my-18 text-center">
            <button className="text-white w-48 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 my-5 font-medium">Nosotros</button>
            <button className="text-white w-48 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 my-5 font-medium">Proyectos</button>
        </div> */}
        <div className="block my-18 text-center">
            <button className="text-white w-48 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 my-5 font-medium">Nosotros</button>
            <button className="text-white w-48 hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 my-5 font-medium">Proyectos</button>
        </div>
        </div>
    )
}

export default Home; 