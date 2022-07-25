
function ProjectCard(props){
    const DemoLinkButton = (props) => {
        if(props.demoLink) {
            return (<a className="button" href={props.demoLink}>Demo</a>)
        }
    }
    return (
        <article className="project-detail">
            <h3>{props.name}</h3>
            <p className="date"><span>Created: </span>{props.date}</p>
            <img src={props.image} alt=""/>
            <p className="js-about-project">{props.description}</p>
            <p className="js-showmore-trigger" data-target="js-about-project">Show 
                <span className="no-click">More</span>
            </p>
            <div className="project-detail__ctas">
                <a className="button" href={props.githubLink}>Github</a>
                {DemoLinkButton(props)}
            </div>
        </article>
    );
}

export default ProjectCard;