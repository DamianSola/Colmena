'use client'
import Image from "next/image";
import { ReadMore } from "../Button";
import React, { useEffect, useRef, useState } from 'react';
import About from "./About.json"

const foto = "https://img.freepik.com/free-photo/bright-shot-new-buildings-neighborhood_23-2147694723.jpg"
// const description = {title:"¿Quienes somos?", desc: "Somos una compañía desarrolladora inmobiliaria que nació en 1992. Contamos con una amplia experiencia en el mercado inmobiliario argentino. Hemos participado en el desarrollo de más de 1.000.000 m2 y administrado proyectos por más de U$S 1.000 millones, entre los más destacados: el Hotel Hilton de Puerto Madero, Torre Bouchard Plaza, Edificio Samsung, Edifcios River View, Palacio Paz XXI, Edificio La Rural entre otros."}

const Description = () =>{

    const {description, title} = About;
    const  [animation, setAnimation] = useState("ocultar")
    const aboutRef = useRef()


    useEffect(() => {
        const handleScroll = () => {
            const div = aboutRef.current;

            const y = div ? div.getBoundingClientRect().y : null

            if(y  > -280 && y < 500) setAnimation('mostrar')
            // else setAnimation( 'ocultar')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)


    },[])
  
    return(
        <div className="bg-white" id="about">
            <div  className={`hidden md:block pt-20  w-full mx-auto px-4 sm:px-6 lg:px-24 ${animation}`} ref={aboutRef} >
                    <h1 className={`text-left text-4xl font-medium mb-5 tracking-wider`} >{title}</h1>
                <div className="flex gap-8" >
                    <div className="w-2/4 ">
                        <p className={`lead text-left text-2xl font-medium leading-relaxed`} >
                            {description}
                        </p>
                    </div>
                    <aside className="hidden md:block flex justify-center items-center w-2/4 ">
                        <img  src={foto} alt="descripcion" />
                    </aside>
                </div>
            </div>
            <div className={`md:hidden flex-col bg-white w-auto text-center ${animation}`}>
                <h1 className="text-center text-4xl font-medium mx-8 py-10 tracking-wider" >{title}</h1>
                <aside className="flex w-full justify-center items-center px-4">
                    <img src={foto} width="500" alt="descripcion" />
                </aside>
                <p className='lead mx-6 sm:mx-10 mt-5 text-justify text-base font-medium leading-relaxed'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Description;