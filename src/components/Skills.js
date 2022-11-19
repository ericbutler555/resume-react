import { useEffect, useState } from "react";
import "../scss/Skills.scss";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/skills.json`)
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>Skills &amp; Technologies</h2>
      <ul className="skills-items">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
