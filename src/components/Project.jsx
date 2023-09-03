

export default function Project(props) {
    return (<div>
    <h3>{props.title}</h3>
    <img src={props.image} alt="insert image here" />
    <p>{props.tagLine}</p>
    </div>);
}
