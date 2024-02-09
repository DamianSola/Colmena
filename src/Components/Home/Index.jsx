'use client'
import React from 'react';

const Home = () => {
    return(
        <div className="bg-green w-full h-screen" >
        <div className="flex-col py-20 items-center text-center text-white">
            <h1 className="text-8xl py-2 tracking-widest">Colmena</h1>
            <h4 className="text-4xl  py-1 tracking-widest">Espacio + Comunidad</h4>
        </div>
        <div className="flex my-18 justify-center">
            <button className="text-white hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 font-medium">Nosotros</button>
            <button className="text-white hover:text-orange hover:bg-white hover:border-white border-2 px-10 py-2 mx-3 font-medium">Proyectos</button>
        </div>
        </div>
    )
}

export default Home; 