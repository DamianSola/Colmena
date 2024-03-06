'use client'
import React, { useState } from 'react';
import Projects from '../Projects/Projects.json';



const projectExemple = {
    "name": "Residencial Jardines del Sol",
    "description":"Torre de apartamentos de alto standing con servicios de primer nivel y espectaculares vistas panorámicas.",
    "images":["https://img.freepik.com/free-photo/heavy-machines-construction-workers-working-building_181624-8234.jpg",
    "https://img.freepik.com/free-photo/residential-house-process-building_23-2147694705.jpg",
    "https://img.freepik.com/free-photo/construction-site-silhouettes_1127-3253.jpg",
    "https://img.freepik.com/free-photo/engineer-group-worker-meeting-discussion-with-construction-blueprint-site-work-point-finger-work-site_1439-10.jpg"
], 
}

const ProjectId = ({id}) => {

    const project = Projects.find(p => p.id == id);
    // console.log(project)
    
    const {images} = projectExemple
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handlePrev = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClick = (index) => {
        setCurrentImageIndex(index)
    }


    return(
        <div className="m-auto pt-20 bg-white">
            <h1 className="m-4 py-4 text-xl">{project.nombre}</h1>
            <p className='m-4'>{project.descripcion}</p>
            <div className='flex m-4 bg-black text-white' >
            <button onClick={handlePrev} className='hidden md:block'>Prev</button>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='w-3/4 md:h-screen m-auto'/>
            <button onClick={handleNext} className='hidden md:block'>Next</button>
            </div>
            <ul className="flex m-4">
                {images.map((img, index) => {
                    return <li className="flex m-2" key={index}>
                        <span onClick={() => handleClick(index)} className='hover:opacity-80 cursor-pointer'>
                                <img src={img} alt={`Image ${index+1}`} className="w-full h-fit	 object-cover"/>
                        </span>
                    </li>
                    })
                }
            </ul>
        </div>
    )
}
export default ProjectId;