'use client'
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { getOneDevelopment } from './../../db/db';

const ProjectId = ({project}) => {

    const {galeria, nombre, imagen, confort, descripcion, descripcion2, lugar } = project

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
           {project &&  <div className="lg:flex items-center bg-orangeLight mb-14 justify-center lg:items-left justify-between ">
            <div className='text-white px-12'>
                <h1 className="text-4xl">{nombre}</h1>
                <p className='font-semibold py-2'>lugar: {lugar}</p>
                <p className='pt-2'>{descripcion}</p>
            </div>
            <img src={imagen} alt="img-main" className='lg:w-2/4 relative top-10 px-12 lg:px-0 lg:shadow-md'/>
        </div>}
        <div className="sm:flex items-top md:items-left  ">
            <div className="grid grid-rows-5 bg-green grid-flow-col gap-3 md:p-12 p-8 justify-between">
                {confort && confort.map((c,i) => {
                    return <div className='md:w-full text-center md:h-24 w-full lg:p-4' key={i}>
                    <img src={c.logo} className='w-14 m-auto lg:w-20'/>
                    <p className='py-4 px-2 m-auto w-auto'>{c.name}</p>
                </div>
                })}
            </div>
        {project &&  <div className='px-12'>
            <p className='py-4 md:text-left text-justify'>{descripcion2}</p>
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
        </div>}
    
    </div>
    <div className='flex m-4 bg-black text-white' >
    </div>
        {galeria && <Modal image={galeria[currentImageIndex]} 
            imgI={currentImageIndex} 
            open={open}  
            close={()=>setOpen(false)}
            next={handleNext}
            prev= {handlePrev}
        />}
        </div>
    )
}
export default ProjectId;



