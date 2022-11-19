import "../scss/Footer.scss";

function Footer() {
  return (
    <footer className="cta">
      <div className="cta-content">
        <p>
          High-performance websites.
          <br />
          Thoughtfully built. Easy to maintain.
        </p>
        <a href="mailto:ericbutler555@gmail.com?subject=I%20saw%20your%20website" target="_blank" rel="noopener" className="cta-button">
          Contact Me
        </a>
      </div>
    </footer>
  );
}

export default Footer;
