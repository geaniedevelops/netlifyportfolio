import { Link } from "react-router-dom";
import { getWork } from "../data";

export function Work() {
  let work = getWork();
  return (
    <div>
      <nav>
        {work.map((project) => (
          <Link
            to={`/work/${project.slug}`}
            key={project.key}
          >
            {project.companyName}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function Company() {
    return <h2>Company #???</h2>;
}