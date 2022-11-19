import { useEffect, useState } from "react";
import "../scss/Experience.scss";
import Job from "./Job";

function Experience() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/experience.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <div className="headnote-container">
        <p className="headnote">Formerly</p>
      </div>

      <section className="jobs cf">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </section>
    </>
  );
}

export default Experience;
