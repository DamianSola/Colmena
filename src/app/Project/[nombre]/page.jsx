'use client'
import ProjectId from "@/Components/Project/Index";
import { useEffect, useState } from "react";
import { getOneDevelopment } from "@/db/db";
import Loader from './loading'

const Project = ({params}) =>{
    const [project, setProject] = useState()
    const urlName = params.nombre;

    useEffect(() => {
        getOneDevelopment(urlName).then(data => setProject(data))

    },[])

    return(
        <div  className="flex flex-col gap-4">
            {project ? 
            <ProjectId project={project}/> : <Loader/>
            }
        </div>
    )
}

export default Project;