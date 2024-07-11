import ClientComponent from "./clientComponent"

export async function generateStaticParams({params}) {
    return [
        { nombre: 'colmena%201' },
        { nombre: 'colmena%202' },
        { nombre: 'colmena%203' },
        { nombre: 'colmena%204' }
    ]
}


const ProjectPage = ({ params }) => {
    const { nombre } = params;
    
    return (
        <ClientComponent nombre={nombre} />
    );
};

export default ProjectPage;