'use client'
import Contact from "./Contact";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from "react";
// import {dataContact} from "./contact.json"

const Footer = () => {

    const  [animation, setAnimation] = useState("footer-hidden")
    const footerRef = useRef()

    // console.log(dataContact)


    useEffect(() => {
        const handleScroll = () => {
            const div = footerRef.current;

            const {y} = div.getBoundingClientRect();

            if(y  > -300 && y < 500) setAnimation('footer-show')
            // else setAnimation( 'footer-hidden')
        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)


    },[])

    return(
        <footer className={`bg-green z-5`} id="contacto"  ref={footerRef}>
            <div className={`block sm:hidden ${animation}`}>
                <h1 className="text-4xl text-semibold leading-loose mx-8 px-4 pt-4" >Contacto</h1>
                <Contact/>
                <aside className={`mt-10 px-10 w-full text-center ${animation}`}>
                    <span className="my-10">
                        <p>{"Alsina 728 - 2DO piso - Dpto 'I'"}</p>
                        <p>Salta 4400</p>
                    </span>
                    <span className="my-10">
                        <p>Tel: 387-4626748,  387 4866936</p>
                    </span>
                    <p className="my-10">
                    <strong>
                        <a href="mailto:grupocolmena.arq@gmail.com">grupocolmena.arq@gmail.com</a>
                    </strong>
                    </p>
                    {/* <p className="mt-5 py-10">© 2023 by damiansola.net</p> */}
                </aside>
                
            </div>
            <div className={`hidden sm:flex justify-around pt-8 pb-20 ${animation}`}>
                <aside className="px-14 py-10 w-1/3">
                <h1 className="text-4xl text-semibold leading-loose">Contacto</h1>
                    <span className="my-10">
                        <p>{"Alsina 728 - 2DO piso - Dpto 'I'"}</p>
                        <p>Salta 4400</p>
                    </span>
                    <span className="my-10">
                        <p>Tel: 387-4626748,  387 4866936</p>
                    </span>
                    <p className="my-10">
                    <strong>
                        <a href="mailto:grupocolmena.arq@gmail.com">grupocolmena.arq@gmail.com</a>
                    </strong>
                    </p>
                </aside>
                <Contact/>
            </div>
            <div className="flex m-auto border-t w-4/5 pb-8 pt-2 justify-around">
            <p className="px-2">©2023 GRUPO COLMENA SRL</p>
            <p className="font-medium">Developed by Damian Sola</p>
            </div>
        </footer>
    )

}

export default Footer;