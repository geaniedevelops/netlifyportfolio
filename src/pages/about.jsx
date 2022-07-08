import { Link } from "react-router-dom";
import { getResume } from "../data";
import '../resources/css/pages/about.css';



export default function About() {
    let resume = getResume();
    let skills = Array.from(resume[3].skills);

    return (
      <main className="about">
        <section>
          <h2>About</h2>
          <p>Gouda stinking bishop queso. Caerphilly stinking bishop say cheese when the cheese comes out everybody's happy manchego fromage the big cheese bocconcini. Taleggio cauliflower cheese swiss squirty cheese cream cheese bavarian bergkase lancashire stinking bishop. St. agur blue cheese queso who moved my cheese chalk and cheese st. agur blue cheese swiss paneer stinking bishop. Taleggio cheese triangles cheesy feet pepper jack.</p>
        </section>
        <section>
            <article>
                <h2>Experience</h2>
                {resume[0].experience.map((position, i) => (
                    <div
                        className="resume-card"
                        key={i}>
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
                <h2>Awards</h2>
                {resume[1].awards.map((award, i) => (
                    <div
                        className="resume-card"
                        key={i}>
                        <h4>{award.awardName}</h4>
                        <p className="resume-card__dates">
                            {award.event}, {award.date}
                        </p>
                    </div>
                ))}
            </article>
            <article>
                <h2>Skills</h2>
                <ul>
                   {skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </article>
            <article>
                <h2>Education</h2>
                {resume[2].education.map((school, i) => (
                    <div
                        className="resume-card"
                        key={i}>
                        <h4>{school.schoolName}</h4>
                        <p>{school.focus}</p>
                        <p className="resume-card__dates">
                            {school.startDate} - {school.endDate}
                        </p>
                    </div>
                ))}
            </article>
        </section>
      </main>
    );
  }