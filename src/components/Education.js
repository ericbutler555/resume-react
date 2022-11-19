import { useEffect, useState } from "react";
import "../scss/Education.scss";
import School from "./School";

function Education() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/schools.json`)
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <section id="education" className="education">
      <div className="education-skin1" aria-hidden="true">
        &nbsp;
      </div>
      <div className="education-skin2" aria-hidden="true">
        &nbsp;
      </div>

      <h2>Education</h2>

      <div className="schools cf">
        {schools.map((school) => (
          <School key={school.id} school={school} />
        ))}
      </div>
    </section>
  );
}

export default Education;
