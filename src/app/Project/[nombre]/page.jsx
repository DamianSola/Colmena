import ProjectId from "@/Components/Project/Index";


const Project = ({params}) =>{

    console.log(params)

    return(
        <div  className="flex flex-col gap-4">
            <ProjectId nombre={params.nombre}/>
        </div>
    )
}

export default Project;