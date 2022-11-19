import "../scss/Experience.scss";
import Job from "./Job";

function Experience() {
  // prettier-ignore
  const jobs = [
    {
      "is_current": false,
      "company_name": "PriceWeber",
      "position": "Senior Front-End Web Developer",
      "description": [
        "Start-to-finish website development for national brands in CPG (consumer packaged goods), healthcare, manufacturing, nonprofit and other business sectors.",
        "Daily use of HTML5, Sass (SCSS), Gulp, jQuery, JavaScript, and WordPress custom theme development. Emphasis on responsive, mobile-first code and compatibility across browsers and devices.",
        "Presented concepts and deliverables to high-value clients, and iterated based on their feedback.",
        "Led in-person client training sessions and wrote documentation guides for clients.",
        "Created wireframes using Adobe XD to prototype, plan content structure and work through UI challenges.",
        "Built offline web apps for interactive kiosks and live presentations at trade shows.",
        "Coded animated HTML5 display ads for digital campaigns with Greensock and Velocity.js.",
        "Picked apart designer PSD comps for image assets and styles, optimized assets for the web, etc."
      ],
      "location": "Louisville, KY",
      "industry": ["Advertising", "Web Development"],
      "start_date": "March 2015",
      "end_date": "September 2018",
      "company_logo": "./logos/PriceWeber-Logo.png"
    },
    {
      "is_current": false,
      "company_name": "State of Hawaii Department of Labor & Industrial Relations",
      "position": "Program Specialist",
      "description": [
        "Designed, built, and maintained several database-driven web apps, websites and intranet tools for the Workforce Development Council, the Unemployment Insurance Division, and the Department of Labor, using Adobe ColdFusion, PHP, MySQL, and jQuery.",
        "Served as webmaster for the Department of Labor's WordPress-powered website: posting content, maintaining pages, and assisting divisions with their sub-sites.",
        "Built a student/employer web portal for University of Hawaii Community College's C3T Program.",
        "Also did graphic design and layout for the Department's annual reports, newsletters, and other print/PDF materials, using Adobe InDesign, Photoshop, and Illustrator."
      ],
      "location": "Honolulu, HI",
      "industry": ["Government", "Web Development"],
      "start_date": "April 2011",
      "end_date": "July 2014",
      "company_logo": "./logos/StateOfHawaii-Logo.png"
    },
    {
      "is_current": false,
      "company_name": "Harpercollins Publishers",
      "position": "Book Designer",
      "description": [
        "Designed book interiors for over 75 national fiction, history, business, memoir and special interest titles.",
        "Prioritized overlapping projects at different stages of production under hard­-set deadlines."
      ],
      "location": "New York, NY",
      "industry": ["Book Publishing", "Graphic Design"],
      "start_date": "July 2008",
      "end_date": "July 2010",
      "company_logo": "./logos/HarperCollins-Logo.png"
    },
    {
      "is_current": false,
      "company_name": "Butler Books",
      "position": "Graphic Designer",
      "description": [
        "Designed dozens of books, covers, and the company's annual sales catalogs.",
        "Managed the company’s e-commerce website."
      ],
      "location": "Louisville, KY",
      "industry": ["Book Publishing", "Graphic Design"],
      "start_date": "December 2005",
      "end_date": "June 2008",
      "company_logo": "./logos/ButlerBooks-Logo.png"
    }
  ];

  return (
    <>
      <div className="headnote-container">
        <p className="headnote">Formerly</p>
      </div>

      <section className="jobs cf">
        {jobs.map((job) => (
          <Job job={job} />
        ))}
      </section>
    </>
  );
}

export default Experience;
