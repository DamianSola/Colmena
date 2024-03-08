'use client'
import React, { useState } from 'react';
import Projects from '../Projects/Projects.json';
import Modal from './Modal';



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

const ProjectId = ({id}) => {

    const project = Projects.find(p => p.id == id);
    // console.log(project)
    
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
            {/* <button onClick={handlePrev} className='hidden md:block'>Prev</button>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='w-3/4 md:h-screen m-auto'/>
            <button onClick={handleNext} className='hidden md:block'>Next</button> */}
            </div>
            {/* <button>open modal</button> */}
            <Modal image={images[currentImageIndex]} 
                imgI={currentImageIndex} 
                open={open}  
                close={()=>setOpen(false)}
                next={handleNext}
                prev= {handlePrev}
                />

            <ul className="grid grid-cols-3 gap-4 m-4">
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


{/* <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img src={image.url} alt={image.alt} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
              <p className="text-white">Descripción de la imagen</p>
            </div>
          </div>
        ))}
      </div> */}