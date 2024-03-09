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
        <div className={`${open? "block" : "hidden"}`}>
            <div className="bg-black w-8/10 z-50 fixed top-0 p-4 md:h-full w-full rounded-sm">
            <button onClick={close} className="opacity-40 hover:opacity-100 text-4xl absolute text-white right-6 top-1 font-light">x</button>
            <div className="flex md:h-full">
                <button className=" opacity-40 left-0 hover:opacity-100 text-4xl font-extralight text-white md:m-2" onClick={prev}>{'<'}</button>
            <img src={image} alt={`image-${imgI}`} className="m-auto w-4/5"/>
                <button className=" opacity-40 right-0 hover:opacity-100 text-4xl font-extralight text-white md:m-2" onClick={next}>{'>'}</button>
            </div>
            </div>
        </div>
    )
}

export default Modal;