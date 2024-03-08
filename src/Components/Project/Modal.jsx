'use client'
import Image from "next/image"
import React, { useEffect, useState } from "react"

const Modal = ({image, open,imgI, close, next, prev}) => {

    // console.log(image)

    // const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // setIsOpen(open)
    }, [])

    return(
        <div className={`${open? "block" : "hidden"} z-50 fixed top-0 p-4 bg-[0000]`}>
            <div className="bg-black p-2 w-9/10">

            <button onClick={close} className="opacity-40 hover:opacity-100 text-4xl absolute text-white right-6 top-3">x</button>
            <img src={image} alt={`image-${imgI}`} className="m-auto w-4/5 h-full m-4 "/>
            <span className="absolute m-auto bottom-5 justify-between">
                <button className="opacity-40 hover:opacity-100 text-7xl text-white p-4" onClick={prev}>{'<'}</button>
                <button className="opacity-40 hover:opacity-100 text-7xl text-white p-4" onClick={next}>{'>'}</button>
            </span>
            </div>
        </div>
    )
}

export default Modal;