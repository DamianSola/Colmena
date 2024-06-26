'use client'
import Image from "next/image";
import { ReadMore } from "../Button";
import React, { useEffect, useRef, useState } from 'react';
import About from "./About.json"
import foto from "./2.png"

// const foto = "https://img.freepik.com/free-photo/bright-shot-new-buildings-neighborhood_23-2147694723.jpg"
// const foto = "https://img.freepik.com/fotos-premium/retrato-cabeza-pareja-adultos-felices-que-toman-selfies-divirtiendose-camara-telefono-sonriendo-esposa-marido-envejecidos-abrazandose-mirando-camara-posando-foto-hombre-envejecido-vlogger-grabando-videoxa_516988-4268.jpg"
// const description = {title:"¿Quienes somos?", desc: "Somos una compañía desarrolladora inmobiliaria que nació en 1992. Contamos con una amplia experiencia en el mercado inmobiliario argentino. Hemos participado en el desarrollo de más de 1.000.000 m2 y administrado proyectos por más de U$S 1.000 millones, entre los más destacados: el Hotel Hilton de Puerto Madero, Torre Bouchard Plaza, Edificio Samsung, Edifcios River View, Palacio Paz XXI, Edificio La Rural entre otros."}

const Description = () =>{

    const {description, description2, title} = About;
    const  [animation, setAnimation] = useState("ocultar")
    const [readMore, setReadMore] = useState(false)
    const aboutRef = useRef()

    // console.log(foto)


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

    const handleClick = () => {
        setReadMore(!readMore)
    }
  
    return(
        <div className="bg-white" id="about">
            <div  className={`hidden md:block pt-20 w-full mx-auto px-4 sm:px-6 lg:px-24 ${animation}`} ref={aboutRef} >
                <div className="flex gap-8" >
                    <div className="w-2/4 ">
                    <h1 className={`text-left text-4xl font-medium mb-5 tracking-wider`} >{title}</h1>
                        <p className={`lead text-left text-xl font-medium leading-relaxed`} >
                            {description}
                        </p>
                        <p className={`${readMore? "blox" : "hidden"} lead text-left text-xl 
                            font-medium leading-relaxed`}>
                            {description2}
                        </p>
                        <ReadMore  readMore={readMore}  setRead={handleClick} />
                    </div>
                    <aside className="hidden md:flex justify-right items-center w-2/4 h-auto">
                        <img src={foto.src} alt="descripcion" />
                    </aside>
                </div>
            </div>
            <div className={`md:hidden flex-col bg-white w-auto pt-4 text-center ${animation}`}>
                <h1 className="text-justify text-3xl font-medium py-6 px-4 tracking-wider" >{title}</h1>
                <aside className="flex w-full justify-center items-center px-4">
                    <Image src={foto.src} width="500" height='500' alt="descrripcion" />
                </aside>
                <p className='lead mx-6 sm:mx-10 mt-5 text-justify text-base font-medium leading-relaxed'>
                    {description}
                </p>
                <p className={`${readMore? "blox" : "hidden"} lead mx-6 sm:mx-10 text-justify text-base font-medium leading-relaxed `}>{description2}</p>
                    <ReadMore  readMore={readMore}  setRead={handleClick} />
            </div>
        </div>
    )
}

export default Description;