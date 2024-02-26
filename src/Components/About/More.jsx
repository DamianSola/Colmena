// import 

const { FaBinoculars, FaMountain, FaHandHoldingHeart } = require("react-icons/fa")

const More = () => {
    return (
        <div className="bg-greenlight block sm:flex px-4 sm:px-6 lg:px-32 font text-white dark:text-white dark:bg-greydark">
            <div className="backdrop-blur-lg sm:w-1/3 md:my-44 sm:m-4 sm:p-4 sm:shadow-lg">
                <div className="flex justify-center flex-col mb-4 opacity-100">
                    <FaMountain className="text-6xl sm:text-8xl m-auto my-2" />
                    <h3 className="w-full text-center text-2xl">Misión</h3>
                </div>
                <p className="text-sm sm:text-base">
                    La misión es una declaración concisa que define el propósito principal de la empresa, explicando qué hace, para quién y cómo. Es una guía que establece los objetivos fundamentales y la dirección a seguir.
                </p>
            </div>
            <div className="backdrop-blur-lg sm:w-1/3 md:my-44 sm:m-4 sm:p-4 sm:shadow-xl">
                <div className="flex justify-center flex-col mb-4">
                    <FaBinoculars className="text-6xl sm:text-8xl m-auto my-2" />
                    <h3 className="w-full text-center text-2xl">Visión</h3>
                </div>
                <p className="text-sm sm:text-base">
                    La visión es una declaración que describe la imagen futura deseada de la empresa, delineando lo que aspira a lograr a largo plazo. Es una meta inspiradora que guía las decisiones estratégicas y motiva a los empleados hacia un objetivo común.
                </p>
            </div>
            <div className="backdrop-blur-lg sm:w-1/3 md:my-44 sm:m-4 sm:p-4 sm:shadow-2xl">
                <div className="flex justify-center flex-col mb-4">
                    <FaHandHoldingHeart className="text-6xl sm:text-8xl m-auto my-2" />
                    <h3 className="w-full text-center text-2xl">Valores</h3>
                </div>
                <p className="text-sm sm:text-base">
                    Los valores son los principios fundamentales y las creencias que guían el comportamiento y las decisiones de la empresa. Son los pilares de la cultura organizacional y establecen las normas de conducta para los empleados, reflejando la identidad y la integridad de la empresa.
                </p>
            </div>
        </div>
    )
}

export default More;