import "../scss/Hero.scss";

function Hero() {
  const scrollToSection = (e) => {
    e.preventDefault();
    const destination = document.querySelector(e.target.hash);
    destination.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="contact-me" className="about-me">
      <div className="about-content">
        <p className="speech">Hello, I&rsquo;m</p>
        <h1>Eric Butler</h1>
        <h2>Front-End Website Developer</h2>

        <p className="intro">
          Check out my{" "}
          <a onClick={scrollToSection} href="#work">
            work samples
          </a>
          ,{" "}
          <a onClick={scrollToSection} href="#current-job">
            job history
          </a>
          , <br />
          <a onClick={scrollToSection} href="#education">
            education
          </a>{" "}
          and{" "}
          <a onClick={scrollToSection} href="#skills">
            technical skills
          </a>{" "}
          below.
        </p>

        <ul className="contact-info cf">
          <li>
            <a href="mailto:ericbutler555@gmail.com?subject=I%20saw%20your%20website">
              <img src={process.env.PUBLIC_URL + "/icons/envelope.svg"} alt="Email" width="30" />
              ericbutler555
              <br />
              @gmail.com
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/5BjhKaPbmcu">
              <img src={process.env.PUBLIC_URL + "/icons/compass.svg"} alt="Location" width="30" />
              Louisville Ky
              <br /> USA
            </a>
          </li>
          <li>
            <a href="https://github.com/ericbutler555">
              <img src={process.env.PUBLIC_URL + "/icons/github.svg"} alt="Github" width="26" />
              GitHub
              <br /> Profile
            </a>
          </li>
          <li>
            <a href="https://codepen.io/ericbutler555/pens/public/">
              <img src={process.env.PUBLIC_URL + "icons/codepen.svg"} alt="CodePen" width="26" />
              CodePen
              <br /> Pens
            </a>
          </li>
        </ul>

        <p className="scroll-down">
          <a onClick={scrollToSection} href="#work" title="See some work">
            <img src={process.env.PUBLIC_URL + "/icons/chevron-down.svg"} alt="Scroll down" width="30" />
          </a>
        </p>
      </div>
    </header>
  );
}

export default Hero;
