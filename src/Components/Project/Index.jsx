'use client'
import React, {useState } from 'react';
import Modal from './Modal';



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
        <div className="m-auto bg-white">
        <div className='w-full md:h-screen bg-black md:bg-opacity-50' >    
            <section className='p-24 text-white absolute zz-10 h-1/2 md:h-full w-full flex flex-col sm:justify-end justify-center bg-black bg-opacity-30'>
                <p className='text-3xl ms:text-6xl font-bold' data-aos="fade-up">{nombre.toUpperCase()}</p>
                <p className='flex my-2 sm:text-2xl font-semibold' data-aos="fade-up">
                    <img src="https://img.icons8.com/?size=100&id=7891&format=png&color=FFFFFF" width='30' alt="ubicacion"  className='mr-2'/>
                     {lugar}</p>
            </section>
            <img src={imagen} className='w-full py-20 md:py-0 md:h-screen'/>
        </div>
        <div className="sm:p-12 pb-12">
        <p className='px-12 md:text-left text-center text-4xl font-medium' data-aos="fade-up">GALERÍA</p>
        {galeria ? 
            <ul className="grid grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-4 py-8" data-aos="fade-up">
                { galeria.map((img, index) => {
                    return <li className="flex m-1" key={index}>
                    <span onClick={() => handleClick(index)} className='hover:opacity-80 cursor-pointer'>
                    <img src={img} alt={`Image ${index+1}`} className="w-full h-auto"/>
                    </span>
                </li>
                })
            } 
            </ul> :
            <div class="animate-pulse sm:flex block sm:justify-between">
                    <div className="max-w-sm w-full bg-white m-auto sm:m-2">
                      <div className="min-h-48 bg-gray shadow-md"></div>
                    </div>
                    <div className="max-w-sm w-full bg-white m-auto my-2 sm:m-2">
                      <div className="min-h-48 bg-gray shadow-md"></div>
                    </div>
                    <div className="max-w-sm w-full bg-white m-auto sm:m-2">
                      <div className="min-h-48 bg-gray shadow-md"></div>
                    </div>
                  </div>
        }
         <div className=' bg-orangeLight py-12 text-white' data-aos="fade-up">
            <p className='px-12 text-justify' data-aos="fade-up">{descripcion}</p>
            <p className='px-12 text-justify' data-aos="fade-up">{descripcion2}</p>
        </div>

    <div className='py-4' >
        <p className='px-12 py-4 md:text-left text-center text-4xl font-medium' data-aos="fade-up">COMODIDADES</p>
         <div className="flex flex-wrap bg-greenlight md:px-12 px-8 py-8 justify-evenly">
                {confort && confort.map((c,i) => {
                    return <div className='text-center my-2 md:p-4 w-1/3 lg:w-1/6 md:w-1/5 sm:w-1/4 border-x ' 
                    data-aos="fade-up" key={i}>

                    <img src={c.logo} className='m-auto w-6 lg:w-10 md:w-14'/>
                    <p className='py-2 px-2 m-auto w-full'>{c.name}</p>
                   
                </div>
                })}
            </div>
    </div>
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



