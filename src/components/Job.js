function Job({ job }) {
  return (
    <div className="job cf">
      <div className="job-details cf">
        <h3 className="job-title">{job.position}</h3>
        <h4 className="job-employer">{job.company_name}</h4>
        <div className="job-summary">
          <ul>
            {job.description?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="job-specs cf">
        <img className="job-icon" src={job.company_logo} alt={job.company_name} loading="lazy" />
        <p className="job-dates">
          {job.start_date} &ndash; {job.end_date}
        </p>
        <p className="job-location">{job.location}</p>
        <p className="job-industry">{job.industry?.join(", ")}</p>
      </div>
    </div>
  );
}

export default Job;
