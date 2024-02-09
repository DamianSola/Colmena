'use client'
import Image from "next/image";
import foto from "./../../../public/Picture.jpg"

const Description = () =>{
    return(
        <div  className="blook py-10 bg-white w-full h-full">
                <h1 className="text-left mt-5 text-4xl font-medium mx-8 my-5 py-4 tracking-wider" >¿Quienes somos?</h1>
            <div className="flex">
                <p className='lead mx-8 w-2/4 text-left text-2xl font-medium leading-relaxed'>
                Somos una compañía desarrolladora inmobiliaria que nació en 1992. Contamos con una amplia experiencia en el mercado inmobiliario argentino. Hemos participado en el desarrollo de más de 1.000.000 m2 y administrado proyectos por más de U$S 1.000 millones, entre los más destacados: el Hotel Hilton de Puerto Madero, Torre Bouchard Plaza, Edificio Samsung, Edifcios River View, Palacio Paz XXI, Edificio La Rural entre otros.
                <button className="bg-black text-white hover:text-black hover:bg-white px-3 px-2 ">Leer mas</button>
                </p>
            <aside className="hidden md:block flex justify-center items-center w-2/4">
                <Image src={foto} alt="descripcion" />
            </aside>
            </div>
        </div>
    )
}

export default Description;