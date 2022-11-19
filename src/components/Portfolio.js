import { useEffect, useState } from "react";
import "../scss/Portfolio.scss";
import Site from "./Site";

function Portfolio() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/portfolio.json`)
      .then((res) => res.json())
      .then((data) => setSites(data));
  }, []);

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
