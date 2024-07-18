'use client'
// import projects from "./Projects"
import {getAllDevelopment} from "@/db/db"
import Carousel from "./Slider"
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";


const Project = () => {
    
    const [projects , setProjects] = useState()

    useEffect(() => {
        
        getAllDevelopment().then((data) => setProjects(data))

    },[])

    return(
        <div className="bg-white p-4 lg:px-24 lg:py-10 md:h-screen"  id="desarrollos">
            <div className="h-10 w-full bg-green"></div>       
                <h1 className={`md:text-left text-center text-4xl font-medium mx-1 py-8  tracking-wider `} data-aos="fade-up">DESARROLLOS</h1>
                <div className={`hidden md:block `} data-aos="fade-up">
                    {projects ? 
                        <Carousel slides={projects} /> 
                        :
                        <div className="animate-pulse flex justify-between ">
                        <div className="max-w-sm w-full bg-white m-2">
                          <div className="min-h-80 bg-gray shadow-md"></div>
                        </div>
                        <div className="max-w-sm w-full bg-white  m-2">
                          <div className="min-h-80 bg-gray shadow-md"></div>
                        </div>
                        <div className="max-w-sm w-full  bg-white  m-2">
                          <div className="min-h-80 bg-gray shadow-md"></div>
                        </div>
                      </div>
                    }
                </div>
                <div className={`flex-col md:hidden `} >
                    {projects ? projects.map((e,i) => {
                        return <div className="sm:w-full h-50 px-2 py-4 text-center transition items-center duration-500 transform brightness-30" data-aos="fade-up" key={i}>
                            <Link href={`/Project/${e.nombre} `} >
                                <img src={e.imagen} className="w-full brightness-50"/>
                            </Link>
                                <p className="absolute top-0 text-white p-8 text-2xl border-white w-full">{e.nombre}</p>
                        </div>
                    }):
                        <div className="animate-pulse flex justify-between ">
                        <div className="max-w-sm w-full bg-white m-2">
                          <div className="min-h-60 bg-gray shadow-md"></div>
                        </div>
                        <div className="max-w-sm w-full bg-white  m-2">
                          <div className="min-h-60 bg-gray shadow-md"></div>
                        </div>
                        <div className="max-w-sm w-full  bg-white  m-2">
                          <div className="min-h-60 bg-gray shadow-md"></div>
                        </div>
                      </div>
                    }
                </div>
        </div>
    )
}

export default Project;
