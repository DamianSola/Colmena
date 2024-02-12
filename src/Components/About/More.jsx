// import 

const { FaBinoculars, FaMountain, FaHandHoldingHeart } = require("react-icons/fa")

const More = () => {
    return(
        <div className="bg-white block sm:flex py-8 px-4 font text-greendark">
            <span className="bg-greenn w-4/5 sm:w-1/3 my-8 sm:m-4 p-4 sm:shadow-md">
                <FaMountain className="text-6xl sm:text-8xl m-auto my-8"/>
                <p className="text-sm sm:text-base"><strong>Misión: </strong>
La misión es una declaración concisa que define el propósito principal de la empresa, explicando qué hace, para quién y cómo. Es una guía que establece los objetivos fundamentales y la dirección a seguir.</p>
            </span> 
            <span className="bg-greenn  w-4/5 sm:w-1/3 my-8 sm:m-4 p-4 sm:shadow-md">
                <FaBinoculars className="text-6xl sm:text-8xl m-auto my-8"/>
                <p className="text-sm sm:text-base"><strong>Visión: </strong>
La visión es una declaración que describe la imagen futura deseada de la empresa, delineando lo que aspira a lograr a largo plazo. Es una meta inspiradora que guía las decisiones estratégicas y motiva a los empleados hacia un objetivo común.</p>
            </span>
            <span className="bg-greenn w-4/5 sm:w-1/3 my-8 sm:m-4 p-4 sm:shadow-md">
                <FaHandHoldingHeart className="text-6xl sm:text-8xl m-auto my-8"/>
                <p className="text-sm sm:text-base"><strong>Valores: </strong>
                Los valores son los principios fundamentales y las creencias que guían el comportamiento y las decisiones de la empresa. Son los pilares de la cultura organizacional y establecen las normas de conducta para los empleados, reflejando la identidad y la integridad de la empresa.</p>
            </span>
        </div>
    )
}

export default More;