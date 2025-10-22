import "../scss/Footer.scss";

function Footer() {
  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.target.closest("a").getAttribute("href");
    const destination = document.querySelector(href);
    destination.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="cta">
      <div className="cta-content">
        <p>
          High-performance websites.
          <br />
          Thoughtfully built. Easy to maintain.
        </p>
        <a onClick={scrollToSection} href="#contact-me" className="cta-button">
          Contact Me
        </a>
      </div>
    </footer>
  );
}

export default Footer;
