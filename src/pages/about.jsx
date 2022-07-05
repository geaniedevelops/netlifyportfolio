import { Link } from "react-router-dom";
import { getResume } from "../data";



export default function About() {
    let resume = getResume();
    let skills = Array.from(resume[2].skills);

    return (
      <main>
        <section>
          <h2>About</h2>
          <p>Gouda stinking bishop queso. Caerphilly stinking bishop say cheese when the cheese comes out everybody's happy manchego fromage the big cheese bocconcini. Taleggio cauliflower cheese swiss squirty cheese cream cheese bavarian bergkase lancashire stinking bishop. St. agur blue cheese queso who moved my cheese chalk and cheese st. agur blue cheese swiss paneer stinking bishop. Taleggio cheese triangles cheesy feet pepper jack.</p>
        </section>
        <hr/>
        <section>
            <article>
                <h2>Experience</h2>
                {resume[0].experience.map((position) => (
                    <div
                        className="resume-card"
                        key={position.key}>
                        <h4>{position.companyName},
                            <span> {position.position}</span>
                        </h4>
                        <p className="resume-card__dates">
                            {position.startDate} - {position.endDate}
                        </p>
                        <Link
                            to={`/work/${position.slug}`}
                        >
                            View Work
                        </Link>
                    </div>
                ))}
            </article>
            <article>
                <h2>Education</h2>
                {resume[1].education.map((school) => (
                    <div
                        className="resume-card"
                        key={school.key}>
                        <h4>{school.schoolName}</h4>
                        <p>{school.focus}</p>
                        <p className="resume-card__dates">
                            {school.startDate} - {school.endDate}
                        </p>
                    </div>
                ))}
            </article>
            <article>
                <h2>Skills</h2>
                <ul>
                    {skills.forEach((skill) => {
                        <li>{skill}</li>
                    })}
                </ul>
            </article>
        </section>
      </main>
    );
  }