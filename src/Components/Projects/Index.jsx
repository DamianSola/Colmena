import projects from "./Projects"
import React from "react";
import Carousel from "./Slider"



const Project = () => {

    return(
        <div className="bg-white">         
                <h1 className="text-left text-4xl font-medium mx-8 py-8 tracking-wider" >Proyectos</h1>
                <Carousel slides={projects} />
        </div>
    )
}

export default Project;




// {
//     projects.map(e => {
//         return  <div key={e}>
//         <img src={e.imagen} />
//         <p className="legend">{e.nombre}</p>
//         <p>{e.descripcion}</p>
//     </div>
//     })
// }
