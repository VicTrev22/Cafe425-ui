import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer container section">
        <div className="footer-container">
          <div className="footer-column">
            <span className="footer-column-title">Navigation</span>
            <ul className="footer-list">
              <a>Home</a>
              <a>Events</a>
              <a>About</a>
              <a>Contact</a>
            </ul>
          </div>
          <div className="footer-column">
            <span className="footer-column-title">Socials</span>
            <ul className="footer-list">
              <a>Instagram</a>
            </ul>
          </div>
        </div>
        <div className="grid-box">
          <div>
            <span className="copyright">
              © 2024 <br /> CAFE425
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
