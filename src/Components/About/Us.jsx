import { ReadMore } from "../Button"

const { default: Image } = require("next/image")

const people = [
    {
        name: "Simon Perez",
        image: "https://kioskobox.com/wp-content/uploads/2023/09/Fotos-de-perfil-profesional.jpg",
        description: "Claire joins Chestnut Park Real Estate Ltd. with 15 years of experience helping clients buy and sell luxury real estate in central Toronto neighbourhoods. From first-time homebuyers to growing families, Claire specializes in helping each and every one of her clients assess their unique needs. She is a great listener, strong negotiator, and truly enjoys building lasting relationships with her clients. "
    },
    {
        name: "Marcos Ramirez",
        image: "https://kioskobox.com/wp-content/uploads/2023/09/Fotos-de-perfil-profesional.jpg",
        description: "Claire joins Chestnut Park Real Estate Ltd. with 15 years of experience helping clients buy and sell luxury real estate in central Toronto neighbourhoods. From first-time homebuyers to growing families, Claire specializes in helping each and every one of her clients assess their unique needs. She is a great listener, strong negotiator, and truly enjoys building lasting relationships with her clients. "
    }
]
//https://kioskobox.com/wp-content/uploads/2023/09/Fotos-de-perfil-profesional.jpg
//https://photogov-com.akamaized.net/examples/cm-visa-4x4-photo/US.webp
const Us = () => {
    
    return(
        <div className="bg-greenlight justify-center">
            <div className="block md:hidden">
                {people.map((e,i) => {
                    return <Profile key={i} description={e.description} image={e.image} name={e.name} />
                })}
            </div>
            <div className="hidden md:block justify-center"> 
            {people.map((e,i) => {
                    return <Profile2 key={i} index={i} description={e.description} image={e.image} name={e.name} />
                })}
            </div>
        </div>
    )
}
//hice cambios enla classname de lalinea 28

const Profile = ({description,name,image}) =>{
    return(
        <div className="bg-white">
        <img src={image} width="500" height="500" alt="foto-perfil"/>
        <h2 className="text-left mx-6 text-4xl font-medium mt-6">
            {name}
        </h2>
        <p className="plead mx-6 sm:mx-10 mt-5 pb-5 text-left text-base font-medium leading-relaxed">
            {description}
        </p>
        {/* <ReadMore/> */}
    </div>
    )
}

// const Profile2 = ({description,name,image,index}) => {
//     // console.log(index%2)

//     if(index%2 === 0){
//         return(
//             <div className="flex bg-white w-2/4" >
//             <img src={image} className="w-2/4" alt="foto-perfil"/>
//             <aside className="flex-col w-2/4  justify-center items-start mx-8"> : 
//                 <h2 className="text-left text-4xl font-medium">
//                     {name}
//                 </h2>
//                 <p className="plead my-4 text-left text-base font-medium leading-relaxed">
//                     {description.slice(0, 150)}
//                 </p>
//                 <ReadMore/>
//             </aside>
//         </div>
//         )
//     }

//     return(
//     <div className="flex bg-white w-2/4">
//             <img src={image} className="w-2/4 " alt="foto-perfil"/>
//             <aside className="flex-col  justify-center w-2/4 items-start mx-8"> : 
//                 <h2 className="text-left text-4xl font-medium">
//                     {name}
//                 </h2>
//                 <p className="plead my-4 text-left text-base font-medium leading-relaxed">
//                     {description.slice(0, 150)}
//                 </p>
//                 <ReadMore/>
//             </aside>
//     </div>
//     )
     
// }


const Profile2 = ({description,name,image,index}) => {
    // console.log(index%2)

    if(index%2 === 0){
        return(
            <div className="flex bg-orange w-4/6 m-auto " >
            <img src={image} className="w-2/4" alt="foto-perfil"/>
            <aside className="flex-col  justify-center items-start mx-8"> : 
                <h2 className="text-left text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-left text-base font-medium leading-relaxed">
                    {description}
                </p>
                <ReadMore/>
            </aside>
        </div>
        )
    }

    return(
    <div className="flex bg-green w-4/6 m-auto ">
            <aside className="flex-col  justify-center items-start mx-8"> : 
                <h2 className="text-left text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-left text-base font-medium leading-relaxed">
                    {description}
                </p>
                <ReadMore/>
            </aside>
            <img src={image} className="w-2/4" alt="foto-perfil"/>
    </div>
    )
     
}


export default Us;