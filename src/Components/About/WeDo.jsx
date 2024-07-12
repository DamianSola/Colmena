import About from "./About.json"
import foto from "./queHacemos.jpg";
import React from 'react';

const WeDo = () => {

    const {weDo} = About

    return(
        <div className={`bg-white pt-12 px-8 lg:px-24 `}>
            <h1 className={`text-center md:text-left text-4xl font-medium tracking-wider md:w-2/4 `} data-aos="fade-up">¿QUE HACEMOS?</h1>
            <div className="py-8 items-center block md:flex">
                <aside className={`md:w-2/4 m-auto `} >
                    <img src={foto.src} height="500" width="500" alt='weDo' className="m-auto relative top-4" data-aos="fade-up"/>
                </aside>
                <p className={`lead text-justify lg:text-left md:text-xl text-l font-medium leading-relaxed md:px-8 py-8 md:w-2/4`} data-aos="fade-up">{weDo}</p>
            </div>
            <div className="h-10 w-full bg-green"></div>
        </div>
    )
}

export default WeDo;