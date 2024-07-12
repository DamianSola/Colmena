'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import About from "./About.json"
import foto from "./queSomos.jpg"


const Description = () =>{

    const {description, description2, title} = About;


    return(
        <div className="bg-white" id="about">
            <div  className={`hidden md:block pt-20 w-full mx-auto px-4 sm:px-6 lg:px-24 `}  >
                    <h1 className={`md:text-left text-4xl font-medium mb-5 tracking-wider`} data-aos="fade-up">{title}</h1>
                <div className="flex gap-8 items-center" >
                        <p className={`lead text-left text-xl font-medium leading-relaxed w-2/4`} data-aos="fade-up">
                            {description}
                        </p>
                    <aside className="hidden md:flex justify-right items-center w-2/4 h-auto">
                        <img src={foto.src} alt="descripcion" data-aos="fade-up"/>
                    </aside>
                </div>
            </div>
            <div className={`md:hidden flex-col bg-white w-auto pt-4 `}>
                <h1 className="text-center text-3xl font-medium py-6 px-4 tracking-wider" data-aos="fade-up">{title}</h1>
                <aside className="flex w-full justify-center items-center px-4">
                    <img src={foto.src} width="500" height='500' alt="descrripcion" data-aos="fade-up"/>
                </aside>
                <p className='lead mx-6 sm:mx-10 mt-5 text-justify text-base font-medium leading-relaxed' data-aos="fade-up">
                    {description}
                </p>
               
            </div>
        </div>
    )
}

export default Description;