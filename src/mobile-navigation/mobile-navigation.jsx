import PropTypes from "prop-types";
import "./mobile-navigation.css";

MobileNavigation.propTypes = {
  show: PropTypes.bool.isRequired,
};

function MobileNavigation({ show }) {
  return (
    <>
      <div
        className={`mobile-navigation ${show ? "mobile-navigation-shown" : ""}`}
      >
        <nav>
          <ul className="mobile-menu">
            <li>
              <a className="mobile-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="mobile-link" href="#events">
                Events
              </a>
            </li>
            <li>
              <a className="mobile-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="mobile-line"></li>
            <li>
              <a className="header-join btn" href="#">
                Join Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileNavigation;
