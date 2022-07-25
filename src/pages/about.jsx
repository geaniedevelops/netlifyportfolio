import { getResume } from "../data";
import '../resources/scss/pages/about.scss';
import { Hackchella } from "../resources/images/images";
import AppTemplate from "./AppTemplate";



export default function About() {
    let resume = getResume();
    let skills = Array.from(resume[3].skills);

    return (
      <AppTemplate pageName="about">
        <section className="about__blurb">
          <h1>About</h1>
          <p>Gouda stinking bishop queso. Caerphilly stinking bishop say cheese when the cheese comes out everybody's happy manchego fromage the big cheese bocconcini. Taleggio cauliflower cheese swiss squirty cheese cream cheese bavarian bergkase lancashire stinking bishop. St. agur blue cheese queso who moved my cheese chalk and cheese st. agur blue cheese swiss paneer stinking bishop. Taleggio cheese triangles cheesy feet pepper jack.</p>
        </section>
        <section className="about__resume">
            <article className="experience">
                <h3>Experience</h3>
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
                    </div>
                ))}
                <p>For more details, please&nbs;
                    <a
                        href="https://drive.google.com/file/d/1QVle4JwI-Kj5hS5gMOi4ptpSKgma8h0p/view?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                    >
                         download my resume.
                    </a>
                </p>
            </article>
            <article className="awards">
                <h3>Awards</h3>
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
                <img src={Hackchella} alt=""/>
            </article>
            <article className="skills">
                <h3>Skills</h3>
                <ul>
                   {skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </article>
            <article className="education">
                <h3>Education</h3>
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
      </AppTemplate>
    );
  }