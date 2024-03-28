import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navigation-bar.css";

function NavigationBar() {
  return (
    <>
      <header className="header container">
        <nav>
          <ul className="header-menu">
            <li>
              <a className="header-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="header-link" href="#events">
                Events
              </a>
            </li>
            <li>
              <a className="header-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="header-line"></li>
            <li>
              <a className="header-join btn" href="#">
                Join Us
              </a>
            </li>
          </ul>
          <FontAwesomeIcon className="header-bar" icon={faBars} />
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
