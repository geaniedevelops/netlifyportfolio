function ProjectCard(props){
    const DemoLinkButton = (props) => {
        if(props.demoLink) {
            return (<a className="button" href={props.demoLink}>Demo</a>)
        }
    }
    return (
        <article className="project-detail">
            <h2>{props.name}</h2>
            <img src={props.image} alt=""/>
            <p><span>Created: </span>{props.date}</p>
            <p>{props.description}</p>
            <div className="project-detail__ctas">
                <a className="button" href={props.githubLink}>Github</a>
                {DemoLinkButton(props)}
            </div>
        </article>
    );
}

export default ProjectCard;