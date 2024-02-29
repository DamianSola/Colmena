import projects from "./Projects"
import React from "react";
import Carousel from "./Slider"


const Project = () => {

    return(
        <div className="bg-white p-4 lg:px-24 lg:py-20 " id="projects">         
                <h1 className="text-left text-4xl font-medium mx-1 pb-8 tracking-wider ">PROYECTOS</h1>
                <div className="hidden md:block animate-fade-in-up">
                <Carousel slides={projects}/>
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
