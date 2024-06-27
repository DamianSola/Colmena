'use client'
import React, { useState } from 'react';
import Projects from '../Projects/Projects.json';
import Modal from './Modal';
import { getOneDevelopment } from '@/db/db';



const projectExemple = {
    "name": "Residencial Jardines del Sol",
    "description":"Torre de apartamentos de alto standing con servicios de primer nivel y espectaculares vistas panorámicas.",
    "images":["https://estudioitem.files.wordpress.com/2023/01/whatsapp-image-2023-01-26-at-19.45.15.jpeg",
    "https://estudioitem.files.wordpress.com/2023/01/whatsapp-image-2023-01-26-at-19.45.15-1.jpeg",
    "https://estudioitem.files.wordpress.com/2023/01/whatsapp-image-2023-01-26-at-19.45.15-2.jpeg",
    "https://estudioitem.files.wordpress.com/2023/01/whatsapp-image-2023-01-26-at-19.45.17.jpeg",
    "https://estudioitem.files.wordpress.com/2023/01/whatsapp-image-2023-01-26-at-19.45.17-1.jpeg",
    "https://estudioitem.files.wordpress.com/2023/04/dji_0563-1.jpg"
], 
}

const ProjectId = ({nombre}) => {

    // const project = Projects.find(p => p.nombre == nombre);
    const project = getOneDevelopment(nombre)
    
    const {images} = projectExemple;
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setOpen] = useState(false)

    const handlePrev = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClick = (index) => {
        setCurrentImageIndex(index)
        setOpen(true)
    }


    return(
        <div className="m-auto pt-20 bg-white">
            <h1 className="m-4 py-4 text-xl">{project.nombre}</h1>
            <p className='m-4'>{project.descripcion}</p>
            <div className='flex m-4 bg-black text-white' >
            </div>
            <Modal image={images[currentImageIndex]} 
                imgI={currentImageIndex} 
                open={open}  
                close={()=>setOpen(false)}
                next={handleNext}
                prev= {handlePrev}
                />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
                {images.map((img, index) => {
                    return <li className="flex md:m-2" key={index}>
                        <span onClick={() => handleClick(index)} className='hover:opacity-80 cursor-pointer'>
                                <img src={img} alt={`Image ${index+1}`} className="w-full h-fit	"/>
                        </span>
                    </li>
                    })
                }
            </ul>
        </div>
    )
}
export default ProjectId;

