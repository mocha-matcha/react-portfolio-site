// THIS DOES NOT WORK IN CSR! 
// import getContent from "../getContent";
import Project from "./Project";
import projectList from "../projectList";
export default function ProjectList()


{
    // console.log(getContent)

    return(<div className="flex">
                {projectList.map((project) => (<Project link={project.link} title={project.title} image={project.image} tagLine={project.tagLine} />))}

    </div>
    );
}
