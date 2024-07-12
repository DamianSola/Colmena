import { ReadMore } from "../Button"
import React, {useState,useRef, useEffect} from "react";
import About from "./About.json" 
const { default: Image } = require("next/image");
// import fotoGuille from "./FOTOGUILLE.jpg";
// import fotoMateo from "./FOTOMATEO.jpg";


const Us = () => {

    const {people} = About;
    
    return(
        <div className="bg-white justify-center w-full " id="equipo">
            <h1 className={`md:pl-24 py-8 text-center md:text-left text-4xl font-medium tracking-wider md:w-2/4 `} data-aos="fade-up">EQUIPO</h1>
            <div className="block md:hidden">
                {people.map((e,i) => {
                    return <Profile key={i}  index={i} description={e.bio} image={e.image} name={e.name} />
                })}
            </div>
            <div className={`hidden md:block justify-center sm:px-6 lg:px-20`} > 
            {people.map((e,i) => {
                    return <Profile2 key={i} index={i} description={e.bio} image={e.image} name={e.name} />
                })}
            </div>
        </div>
    )
}

const Profile = ({description,name,image,index}) =>{
    
    const [readMore, setReadMore] = useState(false);
  
    return(
        <div className={`${index%2 === 0? 'bg-orange': "bg-greenlight" }` } data-aos="fade-up" >
        <h2 className="text-center text-4xl font-medium p-6">
            {name}
        </h2>
        <img src={image}  className="mx-auto w-1/2" alt="foto-perfil"/>
        <p className="plead mx-6 mt-5 pb-5 text-justify text-base font-medium leading-relaxed">
           {description}                
        </p>
        {/* <ReadMore setRead={() => setReadMore(!readMore)} readMore={readMore}/> */}
    </div>
    )
}



const Profile2 = ({description, name,image,index}) => {

    const [readMore, setReadMore] = useState(false);  

    if(index%2 === 0){
        return(
            <div className={`flex bg-orangeLight sm:w-full w-4/5 m-auto`} data-aos="fade-up" >
            <div className="w-1/4 items-center self-center">
            <img src={image} className="w-64 h-auto m-auto" alt="foto-perfil" data-aos="fade-right"/>
            </div>
            <aside className="flex-col flex-1 justify-center items-start px-10" data-aos="fade-left">
                <h2 className="text-left py-2 text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-justify text-sm font-medium leading-relaxed">
                {description}                
                </p>
                {/* <ReadMore setRead={() => setReadMore(!readMore)} readMore={readMore}/> */}
            </aside>
        </div>
        )
    }

    return(
    <div className={`flex bg-greenlight  sm:w-full w-4/5 m-auto`}>
            <aside className="flex-col w-full justify-center items-start px-10" data-aos="fade-right">
                <h2 className="text-left text-4xl py-2 font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-justify text-sm font-medium leading-relaxed">
                {description}                
                </p>
                {/* <ReadMore setRead={() => setReadMore(!readMore)} readMore={readMore}/> */}
            </aside>
            <div className="w-1/4 items-center self-center">
            <img src={image} className="w-64 h-auto m-auto" alt="foto-perfil" data-aos="fade-left"/>
            </div>
    </div>
    )
     
}


export default Us;