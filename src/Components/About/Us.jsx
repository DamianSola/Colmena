import { ReadMore } from "../Button"
import React, {useState,useRef, useEffect} from "react"
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

const Us = () => {
    
    return(
        <div className="bg-white justify-center w-full ">
            <div className="block md:hidden">
                {people.map((e,i) => {
                    return <Profile key={i}  index={i} description={e.description} image={e.image} name={e.name} />
                })}
            </div>
            <div className={`hidden md:block justify-center`} > 
            {people.map((e,i) => {
                    return <Profile2 key={i} index={i} description={e.description} image={e.image} name={e.name} />
                })}
            </div>
        </div>
    )
}

const Profile = ({description,name,image,index}) =>{

    return(
        <div className={`${index%2 === 0? 'bg-orange': "bg-green"  }` } >
        <img src={image} width="500" height="500" className="mx-auto" alt="foto-perfil"/>
        <h2 className="text-left mx-6 text-4xl max-widht-4/5 font-medium mt-6">
            {name}
        </h2>
        <p className="plead mx-6 mt-5 pb-5 text-left max-widht-4/5 text-base font-medium leading-relaxed">
            {description}
        </p>
        {/* <ReadMore/> */}
    </div>
    )
}



const Profile2 = ({description,name,image,index}) => {

    const  [animation, setAnimation] = useState("ocultar")
    // const [animat2, setAnimat2] = useState("ocultar-rigth")

    const usRef = useRef()
    // const otherRef = useRef()


    useEffect(() => {
        const handleScroll = () => {
            const div = usRef.current;
            // const otherDiv = otherRef.current;

            const {y} = div.getBoundingClientRect();
            // const otherY = otherDiv.getBoundingClientRect().y

            if(y  > -280 && y < 400) setAnimation('mostrar')
            // else setAnimation( 'ocultar')

            // if(otherY  > -280 && otherY < 400) setAnimat2('mostrar')
            // setAnimat2('ocultar-rigth')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)


    },[])

    if(index%2 === 0){
        return(
            <div className={`flex bg-orangeLight lg:w-full w-4/5 m-auto ${animation}`}  ref={usRef}>
            <img src={image} className="w-2/4" alt="foto-perfil"/>
            <aside className="flex-col w-2/4 justify-center items-start mx-8 pl-16"> : 
                <h2 className="text-left text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-left text-base font-medium leading-relaxed">
                {description.slice(0, 150)}                
                </p>
                <ReadMore/>
            </aside>
        </div>
        )
    }

    // ${animation === "ocultar" ? "ocultar-rigth" : animation}

    return(
    <div className={`flex bg-greenlight lg:w-full w-4/5 m-auto ${animation}`} ref={usRef}>
            <aside className="flex-col  justify-center items-start mx-8 pl-16"> : 
                <h2 className="text-left text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-left text-base font-medium leading-relaxed">
                {description.slice(0, 150)}                
                </p>
                <ReadMore/>
            </aside>
            <img src={image} className="w-2/4" alt="foto-perfil"/>
    </div>
    )
     
}


export default Us;