'use client'
import projects from "./Projects"
import Carousel from "./Slider"
import React, { useEffect, useRef, useState } from 'react';


const Project = () => {

    const  [project, setProject] = useState("ocultar")
    const divRef = useRef()


    useEffect(() => {
       
        const handleScroll = () => {
            const div = divRef.current;

            const {y} = div.getBoundingClientRect();

            if(y  > -280 && y < 400) setProject('mostrar')
            // else setProject( 'ocultar')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)

    },[])

    return(
        <div className="bg-white p-4 lg:px-24 lg:py-20 " id="projects">         
                <h1 className={`text-left text-4xl font-medium mx-1 pb-8 tracking-wider ${project}`} ref={divRef}>PROYECTOS</h1>
                <div className={`hidden md:block  ${project}`} >
                <Carousel slides={projects} />
                </div>
                <div className="flex-col md:hidden">
                    {projects && projects.map((e,i) => {
                        return <div className="sm:w-full h-50 m-2 text-center transition items-center duration-500 transform brightness-30" key={i}>
                            <img src={e.imagen} className="w-full brightness-50"/>
                            <p className="absolute top-0 text-white p-8 text-2xl border-white w-full">{e.nombre}</p>
                        </div>

                    })}
                </div>
        </div>
    )
}

export default Project;
