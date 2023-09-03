import Project from "./Project";


export default function ProjectList(props)
{

    return(
        <>
        <ul>
            {props.projects.map((project) => (

                <li>
                    <h2></h2>
                </li>
            ))}
        </ul>
        
        </>
    );
}