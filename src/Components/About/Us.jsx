import { ReadMore } from "../Button"

const { default: Image } = require("next/image")

const people = {
    name: "Simon Perez",
    image: "https://www.photo.cl/sitio-web/wp-content/uploads/DSC_0739.jpg",
    description: "Claire joins Chestnut Park Real Estate Ltd. with 15 years of experience helping clients buy and sell luxury real estate in central Toronto neighbourhoods. From first-time homebuyers to growing families, Claire specializes in helping each and every one of her clients assess their unique needs. She is a great listener, strong negotiator, and truly enjoys building lasting relationships with her clients. "
}

const people1 = {
    name: "Marcos Ramirez",
    image: "https://www.photo.cl/sitio-web/wp-content/uploads/DSC_0739.jpg",
    description: "Claire joins Chestnut Park Real Estate Ltd. with 15 years of experience helping clients buy and sell luxury real estate in central Toronto neighbourhoods. From first-time homebuyers to growing families, Claire specializes in helping each and every one of her clients assess their unique needs. She is a great listener, strong negotiator, and truly enjoys building lasting relationships with her clients. "
}


const Us = () => {
    
    return(
        <div className="block">
            <div className="bg-white">
                <img src={people.image} width="500" height="500" alt="foto-perfil"/>
                <h2 className="text-left mx-6 text-4xl font-medium mt-6">
                    {people.name}
                </h2>
                <p className="plead mx-6 sm:mx-10 my-5 text-left text-base font-medium leading-relaxed">
                    {people.description}
                </p>
                <ReadMore/>
            </div>
            <div className="bg-white">
                <img src={people1.image} width="500" height="500"  alt="foto-perfil"/>
                <h2 className="text-left mx-6 text-4xl font-medium mt-6">
                    {people1.name}
                </h2>
                <p className="plead mx-6 sm:mx-10 my-5 text-left text-base font-medium leading-relaxed">
                    {people1.description}
                </p>
                <ReadMore/>
            </div>

        </div>
    )
}

export default Us;