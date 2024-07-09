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
            <div className="block sm:hidden">
                {people.map((e,i) => {
                    return <Profile key={i}  index={i} description={e.bio} image={e.image} name={e.name} />
                })}
            </div>
            <div className={`hidden sm:block justify-center sm:px-6 lg:px-24`} > 
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
        <h2 className="text-center text-4xl font-medium p-6">
            {name}
        </h2>
        <img src={image}  className="mx-auto w-1/2" alt="foto-perfil"/>
        <p className="plead mx-6 mt-5 pb-5 text-justify text-base font-medium leading-relaxed">
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
            <div className={`flex bg-orangeLight sm:w-full w-4/5 m-auto ${animation} `}  ref={usRef}>
            <div className="w-1/3 justify-left items-center self-center">
            <img src={image} className="w-full h-auto m-auto" alt="foto-perfil"/>
            </div>
            <aside className="flex-col flex-1 justify-center items-start px-10"> : 
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
    <div className={`flex bg-greenlight  sm:w-full w-4/5 m-auto ${animation}`} ref={usRef}>
            <aside className="flex-col w-full justify-center items-start px-10"> : 
                <h2 className="text-left text-4xl font-medium">
                    {name}
                </h2>
                <p className="plead my-4 text-justify text-base font-medium leading-relaxed">
                {readMore? description : description.slice(0,550)+"..."}                
                </p>
                <ReadMore setRead={() => setReadMore(!readMore)} readMore={readMore}/>
            </aside>
            <div className="w-1/2 items-center justify-right self-center">
            <img src={image} className="w-full h-auto m-auto" alt="foto-perfil"/>
            </div>
    </div>
    )
     
}


export default Us;