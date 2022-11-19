import { useEffect, useState } from "react";
import "../scss/CurrentJob.scss";

function CurrentJob() {
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/current-job.json`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <section id="current-job" className="current-job cf">
      <p className="headnote">Currently</p>

      <img className="icon" src={job.company_logo} alt={job.company_name} width="150" loading="lazy" />

      <h3 className="title">{job.position}</h3>
      <h4 className="employer">{job.company_name}</h4>

      <div className="specs">
        <p className="dates">
          {job.start_date} &ndash; {job.is_current ? "present" : job.end_date}
        </p>
        <p className="location">{job.location}</p>
        <p className="industry">{job.industry?.join(", ")}</p>
      </div>

      <div className="summary">
        <ul>
          {job.description?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CurrentJob;
