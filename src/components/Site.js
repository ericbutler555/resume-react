function Site({ site }) {
  return (
    <div className={"site" + (!site.is_active ? " inactive" : "")}>
      {site.link ? (
        <a href={site.link} target="_blank" rel="noopener">
          <img src={site.screenshot} alt={"Screenshot of the " + site.title + " website"} loading="lazy" />
        </a>
      ) : (
        <img src={site.screenshot} alt={"Screenshot of the " + site.title + " website"} loading="lazy" />
      )}

      <h4>{site.title}</h4>
      <p>
        {site.year} - {site.tech_stack?.join(", ")}
      </p>
    </div>
  );
}

export default Site;
