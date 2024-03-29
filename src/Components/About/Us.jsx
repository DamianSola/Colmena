import { ReadMore } from "../Button"
import React, {useState,useRef, useEffect} from "react";
import About from "./About.json" 
const { default: Image } = require("next/image");


const Us = () => {

    const {people} = About
    
    return(
        <div className="bg-white justify-center w-full ">
            <div className="block md:hidden">
                {people.map((e,i) => {
                    return <Profile key={i}  index={i} description={e.bio} image={e.image} name={e.name} />
                })}
            </div>
            <div className={`hidden md:block justify-center`} > 
            {people.map((e,i) => {
                    return <Profile2 key={i} index={i} description={e.bio} image={e.image} name={e.name} />
                })}
            </div>
        </div>
    )
}

const Profile = ({description,name,image,index}) =>{

    const  [animation, setAnimation] = useState("ocultar")
    const [readMore, setReadMore] = useState(false);

    const usRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const div = usRef.current;
            const y = div ? div.getBoundingClientRect().y : null
            if(y  > -280 && y < 500) setAnimation('mostrar')

        }

        window.addEventListener( "scroll", handleScroll);
    
        return () => window.removeEventListener( "scroll", handleScroll)
    },[])

    return(
        <div className={`${index%2 === 0? 'bg-orange': "bg-greenlight"  } ${animation}` } ref={usRef} >
        <img src={image} width="500" height="500" className="mx-auto" alt="foto-perfil"/>
        <h2 className="text-left mx-6 text-4xl max-widht-4/5 font-medium mt-6">
            {name}
        </h2>
        <p className="plead mx-6 mt-5 pb-5 text-justify max-widht-4/5 text-base font-medium leading-relaxed">
            {readMore? description : description.slice(0,500)+"..."}                
        </p>
        <ReadMore setRead={() => setReadMore(!readMore)} readMore={readMore}/>
    </div>
    )
}



const Profile2 = ({description, name,image,index}) => {

    const  [animation, setAnimation] = useState("ocultar");
    const [readMore, setReadMore] = useState(false);

    const usRef = useRef()
  

    useEffect(() => {
        const handleScroll = () => {
            const div = usRef.current;
            const y = div ? div.getBoundingClientRect().y : null
            if(y  > -280 && y < 500) setAnimation('mostrar')
        }

        window.addEventListener( "scroll", handleScroll);
        return () => window.removeEventListener( "scroll", handleScroll)
    },[])


    if(index%2 === 0){
        return(
            <div className={`flex bg-orangeLight lg:w-full w-4/5 m-auto ${animation} `}  ref={usRef}>
            <div className="w-1/2 justify-center items-center self-center">
            <img src={image} className="w-full h-auto m-auto" alt="foto-perfil"/>
            </div>
            <aside className="flex-col flex-1 w-2/4 justify-center items-start px-10"> : 
                <h2 className="text-left text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-justify text-base font-medium leading-relaxed">
                {readMore? description : description.slice(0,550)+"..."}                
                </p>
                <ReadMore setRead={() => setReadMore(!readMore)} readMore={readMore}/>
            </aside>
        </div>
        )
    }

    return(
    <div className={`flex bg-greenlight lg:w-full w-4/5 m-auto ${animation}`} ref={usRef}>
            <aside className="flex-col w-1/2 justify-center items-start px-10"> : 
                <h2 className="text-left text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-justify text-base font-medium leading-relaxed">
                {readMore? description : description.slice(0,550)+"..."}                
                </p>
                <ReadMore setRead={() => setReadMore(!readMore)} readMore={readMore}/>
            </aside>
            <div className="w-1/2 items-center self-center">
            <img src={image} className="w-full" alt="foto-perfil"/>
            </div>
    </div>
    )
     
}


export default Us;