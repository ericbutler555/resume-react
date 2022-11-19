import "../scss/TopRibbon.scss";

function TopRibbon() {
  return (
    <div className="top-ribbon">
      <p>
        This is the React JS version of this page.{" "}
        <a href="https://github.com/ericbutler555/resume-react/" target="_blank">
          Here's the repo
        </a>
        . I also made an <a href="https://ericbutler555.github.io/resume-ng/">Angular version</a>.
      </p>
    </div>
  );
}

export default TopRibbon;
