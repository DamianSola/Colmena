'use client'
// import projects from "./Projects"
import {getAllDevelopment} from "@/db/db"
import Carousel from "./Slider"
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";


const Project = () => {

    const  [project, setProject] = useState("ocultar")
    const [projects , setProjects] = useState()

    const divRef = useRef()

    // const projects = async () => await getAllDevelopment()


    useEffect(() => {
        
        getAllDevelopment().then((data) => setProjects(data))
        
        const handleScroll = () => {
            const div = divRef.current;
            const y = div ? div.getBoundingClientRect().y : null

            if(y  > -2000 && y < 400) setProject('mostrar')
        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)

    },[])

    return(
        <div className="bg-white p-4 lg:px-24 lg:py-20 " ref={divRef} id="projects">         
                <h1 className={`text-left text-4xl font-medium mx-1 md:pb-8  tracking-wider ${project}`} >DESARROLLOS</h1>
                <div className={`hidden md:block ${project}`} >
                    {projects && 
                        <Carousel slides={projects} />
                    }
                </div>
                <div className={`flex-col md:hidden ${project}`} >
                    {projects && projects.map((e,i) => {
                        return <div className="sm:w-full h-50 px-2 py-4 text-center transition items-center duration-500 transform brightness-30" key={i}>
                            <Link href={`/Project/${e.id} `} >
                                <img src={e.imagen} className="w-full brightness-50"/>
                            </Link>
                                <p className="absolute top-0 text-white p-8 text-2xl border-white w-full">{e.nombre}</p>
                        </div>

                    })}
                </div>
        </div>
    )
}

export default Project;
