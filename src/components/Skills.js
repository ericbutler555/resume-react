import "../scss/Skills.scss";

function Skills() {
  // prettier-ignore
  const skills = [
    "Semantic HTML",
    "CSS, Sass & Less",
    "JavaScript & ES6",
    "Angular",
    "Next.js",
    "jQuery",
    "REST APIs",
    "Responsive web design",
    "WordPress & custom themes",
    "PHP",
    "SQL",
    "Kentico CMS",
    "Adobe Experience Manager",
    "Gulp.js",
    "Git & GitHub",
    "TFS",
    "HTML email",
    "Greensock (GSAP)",
    "Landing pages",
    "Google Tag Manager & Analytics",
    "Adobe InDesign, Photoshop, Illustrator & XD",
    "Figma"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills &amp; Technologies</h2>
      <ul className="skills-items">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
