'use client'
import Contact from "./Contact";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import React from "react";

const Footer = () => {


    return(
        <footer className={`bg-green z-5`} id="contacto" >
            <div className={`block md:hidden `}>
                {/* <h1 className="hidden text-4xl text-semibold leading-loose mx-8 px-4 pt-4" data-aos="fade-up">Contacto</h1> */}
                <div className="px-12">
                <p className="text-3xl pt-6 text-semibold leading-loose" data-aos="fade-up">TE CONTACTAMOS</p>
                    <Contact/>
                </div>
                <aside className={`py-5 px-10 w-4/5 text-center flex-col`} data-aos="fade-up">
                    <span className="my-10 inline-flex justify-center items-center" >
                    <img src="https://img.icons8.com/?size=100&id=7891&format=png&color=000000" width='25' alt="ubicacion"  className='mr-4 '/>
                        <p>{"Alsina 728 - 2DO piso - Dpto 'I'"}</p>
                        <p>Salta 4400</p>
                    </span>
                    <span className="my-5 inline-flex w-full justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25377.png" width="25" className="mr-4"/>
                        <p>387-4626748</p>
                    </span>
                    <span className="my-5 inline-flex  w-full justify-center items-center" >
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25377.png" width="25" className="mr-4"/>
                        <p>387 4866936</p>
                    </span>
                    <p className="my-5 inline-flex justify-center items-center" >
                        <img src="https://cdn-icons-png.flaticon.com/512/95/95645.png" width="25" className="mr-4"/>
                    <strong>
                        <a href="mailto:grupocolmena.arq@gmail.com">grupocolmena.arq@gmail.com</a>
                    </strong>
                    </p>
                </aside>
                
            </div>
            <div className={`hidden md:flex justify-around pt-4 pb-14`}>
                <div className="mx-8 md:m-8 bg-transparent rounded md:w-2/5 ">
                    <p className="text-4xl text-semibold leading-loose" data-aos="fade-up">TE CONTACTAMOS</p>
                    <Contact/>
                </div>
                <aside className=" my-10 py-10 w-1/3 flex-col">
                    <span className="my-10" data-aos="fade-up">
                        <p className="inline-flex items-center">
                        <img src="https://img.icons8.com/?size=100&id=7891&format=png&color=000000" width='25' alt="ubicacion"  className='mr-4 '/>
                            {"Alsina 728 - 2DO piso - Dpto 'I'"}, Salta</p>
                    </span>
                    <span className="my-5 inline-flex w-full items-center" data-aos="fade-up">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25377.png" width="25" className="mr-4"/>
                        <p>387-4626748</p>
                    </span>
                    <span className="my-5 inline-flex w-full items-center" data-aos="fade-up">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25377.png" width="25" className="mr-4"/>
                        <p>387 4866936</p>
                    </span>
                    <p className="my-5 inline-flex items-center" data-aos="fade-up">
                    <img src="https://cdn-icons-png.flaticon.com/512/95/95645.png" width="25" className="mr-4"/>
                    <strong>
                        <a href="mailto:grupocolmena.arq@gmail.com">grupocolmena.arq@gmail.com</a>
                    </strong>
                    </p>
                </aside>
               
            </div>
            <div className="flex m-auto border-t w-4/5 pb-8 pt-2 justify-around">
            <p className="px-2">©2023 GRUPO COLMENA SAS</p>
            <p className="font-medium">Developed by Damian Sola</p>
            </div>
        </footer>
    )

}

export default Footer;