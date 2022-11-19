import "../scss/CurrentJob.scss";

function CurrentJob() {
  // prettier-ignore
  const job = {
    is_current: true,
    company_name: "Farm Credit Mid-America",
    position: "Front-End Web Developer",
    description: [
      "Lead developer and maintainer of the company's customer-facing websites, which received over 760,000 unique visitors in 2021. Websites use Kentico CMS, Sass and Gulp.",
      "Work closely with the Marketing Dept and brand teams to create landing pages and lead-generation forms to attract new customers.",
      "Coordinate with 3rd-party design agencies and vendors on partnerships and integrations.",
      "Set up tracking events in Google Tag Manager to capture audience and engagement analytics that help shape business decisions.",
      "Help code feature requests and bug fixes for internal web apps using C# ASP.NET and Angular, as needed."
    ],
    location: "Louisville, KY",
    industry: ["Financial Services", "Web Development"],
    start_date: "September 2018",
    end_date: null,
    company_logo: "./logos/FarmCredit-Logo.svg",
  };

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
          {job.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CurrentJob;
