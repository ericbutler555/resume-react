function School({ school }) {
  return (
    <div className="school cf">
      <img src={school.icon} alt={school.name} className="school-icon" loading="lazy" />

      <h3 className="school-name">{school.name}</h3>

      {school.program && <h4 className="school-program">{school.program}</h4>}

      <div className="school-stats">
        <p className="school-credit">{school.certificate}</p>
        <p className="school-location">{school.location}</p>
        <p className="school-dates">
          {school.start_date} &ndash; {school.end_date}
        </p>
      </div>
    </div>
  );
}

export default School;
