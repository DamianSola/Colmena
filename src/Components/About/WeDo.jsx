import About from "./About.json"
import foto from "./3.png";
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
            // else setAnimation( 'ocultar')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)


    },[])

    // console.log(weDo)

    return(
        <div className={`bg-white pt-12 px-8 lg:px-24 `}>
            <div className={`bg-green ${animation}`}  ref={aboutRef}>
            <Image src={foto.src} height="500" width="500" alt='weDo' className="m-auto relative top-4"/>
            </div>
            <div className="block md:flex pt-20">
            <h1 className={`text-left text-4xl font-medium mb-5 tracking-wider w-2/4 ${animation}`}>¿QUE HACEMOS?</h1>
            <p className={`lead text-left text-xl font-medium leading-relaxed  w-2/4 ${animation}`}>{weDo}</p>
            </div>
        </div>
    )
}

export default WeDo;