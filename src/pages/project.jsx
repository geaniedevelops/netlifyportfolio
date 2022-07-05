import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../data";

function Project() {
    let params = useParams();
    let project = getProjectBySlug(params.slug);

    return (
        <section>
            <h2>{project.name}</h2>
            <img src={project.image} alt=""/>
        </section>
    );
  }

  export default Project;