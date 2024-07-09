import About from "./About.json"
import foto from "./area.jpg";
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";

const WeDo = () => {

    const {weDo} = About

    const  [animation, setAnimation] = useState("ocultar")
    const aboutRef = useRef()


    useEffect(() => {
        const handleScroll = () => {
            const div = aboutRef.current;

            const y = div ? div.getBoundingClientRect().y : null

            if(y  > -280 && y < 500) setAnimation('mostrar')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)


    },[])

    return(
        <div className={`bg-white pt-12 px-8 lg:px-24 `}>
            <h1 className={`text-center md:text-left text-4xl font-medium tracking-wider md:w-2/4 ${animation}`}>¿QUE HACEMOS?</h1>
            <div className="py-8 items-center block md:flex">
                <aside className={`md:w-2/4 m-auto ${animation}`}  ref={aboutRef}>
                    <Image src={foto.src} height="500" width="500" alt='weDo' className="m-auto relative top-4"/>
                </aside>
                <p className={`lead text-justify lg:text-left md:text-xl text-l font-medium leading-relaxed md:px-8 py-8 md:w-2/4 ${animation}`}>{weDo}</p>
            </div>
            <div className="h-10 w-full bg-green"></div>
        </div>
    )
}

export default WeDo;