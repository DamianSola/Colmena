// import ClientComponent from "./clientComponent"
'use client'
import ProjectId from "@/Components/Project/Index";
import ProjectModal from "@/Components/Projects/Index";
import { useEffect, useState } from "react";
import { getOneDevelopment, getAllDevelopment } from "@/db/db";
import Loader from './loading';
import AOS from 'aos';
import 'aos/dist/aos.css';

// export async function generateStaticParams({params}) {
//     return [
//         { nombre: 'colmena%201' },
//         { nombre: 'colmena%202' },
//         { nombre: 'colmena%203' },
//         { nombre: 'colmena%204' }
//     ]
// }


const ProjectPage = ({ params }) => {
    const { nombre } = params;
    
    // return (
    //     <ClientComponent nombre={nombre} />
    // );
    const [project, setProject] = useState()

    useEffect(() => {
        getOneDevelopment(nombre).then(data => setProject(data))
        AOS.init({ duration: 1000 });
    },[])

    return(
        <div>
            {project ?   
            <>
            <ProjectId project={project}/>
            <ProjectModal/>
            </>
            : <Loader/>
            }
        </div>
    )
};

export default ProjectPage;