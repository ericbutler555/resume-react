import "../scss/Portfolio.scss";
import Site from "./Site";

function Portfolio() {
  // prettier-ignore
  const sites = [
    {
      "id": 1,
      "title": "Better Together",
      "link": "https://e-farmcredit.com/merger/",
      "is_active": true,
      "screenshot": "./screenshots/merger.jpg",
      "year": "2022",
      "tech_stack": ["One-Pager", "Flexbox", "CSS Custom Properties"]
    },
    {
      "id": 2,
      "title": "Into the Dust",
      "link": "https://www.intothedustbook.com/",
      "is_active": true,
      "screenshot": "./screenshots/intothedust.jpg",
      "year": "2021",
      "tech_stack": ["Next.js", "React", "Netlify", "CSS Modules"]
    },
    {
      "id": 3,
      "title": "Rural 1st",
      "link": "https://rural1st.com/",
      "is_active": true,
      "screenshot": "./screenshots/rural1st.jpg",
      "year": "2020",
      "tech_stack": ["Kentico CMS", "HTML", "Sass", "Bootstrap", "JS"]
    },
    {
      "id": 4,
      "title": "Early Times Bottled-in-Bond",
      "link": "https://www.earlytimesbottledinbond.com/",
      "is_active": true,
      "screenshot": "./screenshots/etbib.jpg",
      "year": "2018",
      "tech_stack": ["Docker", "WordPress", "PHP", "HTML", "Sass", "JS"]
    },
    {
      "id": 5,
      "title": "Hershey Solutions",
      "link": "https://www.hersheys.com/hersheysolutions/en_us/home.html",
      "is_active": true,
      "screenshot": "./screenshots/hersheysolutions.jpg",
      "year": "2018",
      "tech_stack": ["Adobe Experience Manager", "CSS", "JS"]
    },
    {
      "id": 6,
      "title": "Alliance for Substance Abuse Progress",
      "link": "https://www.asapbc.org/",
      "is_active": true,
      "screenshot": "./screenshots/asap.jpg",
      "year": "2017",
      "tech_stack": ["WordPress", "PHP", "HTML", "CSS", "JS"]
    },
    {
      "id": 7,
      "title": "Korbel California Champagne",
      "link": null,
      "is_active": false,
      "screenshot": "./screenshots/korbel.jpg",
      "year": "2017",
      "tech_stack": ["WordPress", "PHP", "HTML", "CSS", "JS"]
    },
    {
      "id": 8,
      "title": "Canadian Mist",
      "link": null,
      "is_active": false,
      "screenshot": "./screenshots/canadianmist.jpg",
      "year": "2016",
      "tech_stack": ["WordPress", "PHP", "HTML", "CSS", "JS"]
    },
    {
      "id": 9,
      "title": "Norton Children’s Hospital",
      "link": null,
      "is_active": false,
      "screenshot": "./screenshots/nortonchildrens.jpg",
      "year": "2016",
      "tech_stack": ["Design", "WordPress", "PHP", "HTML", "CSS", "JS"]
    }
  ];

  return (
    <section id="work" className="work cf">
      <p className="headnote">Work Samples</p>

      <div className="sites cf">
        {sites.map((site) => (
          <Site key={site.id} site={site} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
