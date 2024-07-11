'use client'
import ProjectId from "@/Components/Project/Index";
import ProjectModal from "@/Components/Projects/Index";
import { useEffect, useState } from "react";
import { getOneDevelopment, getAllDevelopment } from "@/db/db";
import Loader from './loading';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({nombre}) =>{
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
}

export default Project;