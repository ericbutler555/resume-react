import "../scss/Education.scss";
import School from "./School";

function Education() {
  // prettier-ignore
  const schools = [
    {
      "id": 1,
      "name": "New York University",
      "program": "Summer Publishing Institute",
      "certificate": "Certificate",
      "location": "New York, NY",
      "start_date": "June 2007",
      "end_date": "August 2007",
      "icon": "./logos/NewYorkUniversity-Logo.png"
    },
    {
      "id": 2,
      "name": "University of Louisville",
      "program": "English",
      "certificate": "Bachelor of Arts",
      "location": "Louisville, KY",
      "start_date": "August 2003",
      "end_date": "December 2006",
      "icon": "./logos/UniversityOfLouisville-Logo.png"
    },
    {
      "id": 3,
      "name": "University of Miami",
      "program": "Entrepreneurship",
      "certificate": "Transferred",
      "location": "Coral Gables, FL",
      "start_date": "August 2001",
      "end_date": "May 2003",
      "icon": "./logos/UniversityOfMiami-Logo.png"
    },
    {
      "id": 4,
      "name": "Trinity High School",
      "program": null,
      "certificate": "HS Diploma",
      "location": "Louisville, KY",
      "start_date": "August 1997",
      "end_date": "June 2001",
      "icon": "./logos/TrinityHS-Logo.png"
    }
  ];

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
