'use client'
import Image from "next/image"
import React, { useEffect, useState } from "react"

const Modal = ({image, open,imgI, close, next, prev}) => {


    useEffect(() => {
    }, [])

    return(
        <div className={`${open? "block" : "hidden"}`}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="bg-black w-8/10 z-50 fixed top-0 p-4 md:h-full w-full rounded-sm">
            <span onClick={close} className="material-symbols-outlined opacity-40 hover:opacity-100 text-4xl absolute text-white right-6 top-1 font-light">close</span>
                <div className="flex md:h-full">
                    <span onClick={prev} className="material-symbols-outlined opacity-40 left-0 hover:opacity-100 text-4xl font-extralight text-white md:m-2">arrow_back_ios</span>
                    <img src={image} alt={`image-${imgI}`} className="m-auto w-4/5"/>
                    <span className="material-symbols-outlined opacity-40 my-12 right-0 hover:opacity-100 text-4xl font-extralight text-white md:m-2" onClick={next} >arrow_forward_ios</span>
                </div>
            </div>
        </div>
    )
}

export default Modal;