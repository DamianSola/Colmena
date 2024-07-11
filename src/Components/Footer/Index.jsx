'use client'
import Contact from "./Contact";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import React from "react";

const Footer = () => {


    return(
        <footer className={`bg-green z-5`} id="contacto" >
            <div className={`block sm:hidden `}>
                <h1 className="text-4xl text-semibold leading-loose mx-8 px-4 pt-4" data-aos="fade-up">Contacto</h1>
                <Contact/>
                <aside className={`mt-10 px-10 w-full text-center `} >
                    <span className="my-10" data-aos="fade-up">
                        <p>{"Alsina 728 - 2DO piso - Dpto 'I'"}</p>
                        <p>Salta 4400</p>
                    </span>
                    <span className="my-10" data-aos="fade-up">
                        <p>Tel: 387-4626748,  387 4866936</p>
                    </span>
                    <p className="my-10" data-aos="fade-up">
                    <strong>
                        <a href="mailto:grupocolmena.arq@gmail.com">grupocolmena.arq@gmail.com</a>
                    </strong>
                    </p>
                </aside>
                
            </div>
            <div className={`hidden sm:flex justify-around pt-8 pb-20`}>
                <aside className="px-14 py-10 w-1/3">
                <h1 className="text-4xl text-semibold leading-loose" data-aos="fade-up">Contacto</h1>
                    <span className="my-10" data-aos="fade-up">
                        <p>{"Alsina 728 - 2DO piso - Dpto 'I'"}</p>
                        <p>Salta 4400</p>
                    </span>
                    <span className="my-10" data-aos="fade-up">
                        <p>Tel: 387-4626748,  387 4866936</p>
                    </span>
                    <p className="my-10" data-aos="fade-up">
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