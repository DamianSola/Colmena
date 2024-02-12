'use client'
import Image from "next/image";
import foto from "./../../../public/Picture.jpg";
import { ReadMore } from "../Button";

const description = {title:"¿Quienes somos?", desc: "Somos una compañía desarrolladora inmobiliaria que nació en 1992. Contamos con una amplia experiencia en el mercado inmobiliario argentino. Hemos participado en el desarrollo de más de 1.000.000 m2 y administrado proyectos por más de U$S 1.000 millones, entre los más destacados: el Hotel Hilton de Puerto Madero, Torre Bouchard Plaza, Edificio Samsung, Edifcios River View, Palacio Paz XXI, Edificio La Rural entre otros."}

const Description = () =>{
    return(
        <>
            <div  className="hidden md:block py-10 bg-white w-full">
                    <h1 className="text-left mt-5 text-4xl font-medium mx-8 my-5 py-4 tracking-wider" >{description.title}</h1>
                <div className="flex">
                    <div className=" mx-8 w-2/4">

                        <p className='lead text-left text-2xl font-medium leading-relaxed'>
                            {description.desc}
                        </p>
                        {/* <ReadMore/> */}
                    </div>
                    <aside className="hidden md:block flex justify-center items-center w-2/4">
                        <Image src={foto} alt="descripcion" />
                    </aside>
                </div>
            </div>
            <div className="md:hidden flex-col bg-white w-auto text-center">
                <h1 className="text-center text-4xl font-medium mx-8 py-5 tracking-wider" >{description.title}</h1>
                <aside className="flex w-full justify-center items-center ">
                    <Image src={foto} width="500" alt="descripcion" />
                </aside>
                <p className='lead mx-6 sm:mx-10 mt-5 text-justify text-base font-medium leading-relaxed'>
                    {description.desc}
                </p>
                    {/* <button className="bg-black relative  border-black text-1xl font-medium text-white hover:text-black border-2 hover:bg-white m-5 px-4 ">Leer mas</button> */}
                {/* <ReadMore/> */}
            </div>
        </>
    )
}

export default Description;