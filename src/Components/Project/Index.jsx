'use client'
import React, { useState } from 'react';
import Projects from '../Projects/Projects.json';
import Modal from './Modal';
import { getOneDevelopment } from '@/db/db';
import Image from 'next/image';
import logo from './LogoColmena03.png'


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

    const project = getOneDevelopment(nombre)

    console.log(project.confort[1].name)
    
    const {imagen , galeria} = project;
    const images = project.galeria
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setOpen] = useState(false)

    const handlePrev = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? galeria.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === galeria.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClick = (index) => {
        setCurrentImageIndex(index)
        setOpen(true)
    }


    return(
        <div className="m-auto mt-20 bg-white">
            <div className="flex items-center bg-orangeLight mb-14 justify-center md:items-left justify-between ">
                <div className='text-white px-12'>
                    <h1 className="text-4xl">{project.nombre}</h1>
                    <p className='pt-4'>{project.descripcion}</p>
                </div>
                <img src={imagen} alt="img-main" className='w-2/4 relative top-10 shadow-md'/>
            </div>
            <div className="flex items-center justify-center md:items-left justify-between ">
                {/* <img src={imagen} alt="img-main" className='w-2/4 relative top-10 shadow-md'/> */}
                <div className="grid grid-rows-5 bg-green grid-flow-col gap-3 p-12">
                    { project.confort.map((c,i) => {
                        return <div className='text-center justify-center item-center w-20 m-4' kety={i}>
                            <img src={c.logo} width='70' height='70'/>
                            <p className='p-2'>{c.name}</p>
                        </div>
               })}
            </div>
                <div className='px-12'>
                    {/* <h1 className="text-4xl">{project.nombre}</h1> */}
                    <p className='py-4'>{project.descripcion2}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
                {galeria && galeria.map((img, index) => {
                    return <li className="flex md:m-1" key={index}>
                        <span onClick={() => handleClick(index)} className='hover:opacity-80 cursor-pointer'>
                                <img src={img} alt={`Image ${index+1}`} className="w-full h-fit	"/>
                        </span>
                    </li>
                    })
                }
            </ul>
                </div>
                
            </div>
            <div className='flex m-4 bg-black text-white' >
            </div>
            <Modal image={galeria[currentImageIndex]} 
                imgI={currentImageIndex} 
                open={open}  
                close={()=>setOpen(false)}
                next={handleNext}
                prev= {handlePrev}
                />
           
        </div>
    )
}
export default ProjectId;

