import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./navigation-bar.css";
import MobileNavigation from "../mobile-navigation/mobile-navigation";

function NavigationBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Automatically hide the mobile navigation and reset to the bar icon on larger screens
      if (window.innerWidth > 768) {
        setShow(false);
      }
    }

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call the resize handler immediately to set the initial state correctly
    handleResize();

    // Cleanup by removing the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    console.log(show);
    setShow(!show);
  };

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
          <div
            className={`icon-container ${show ? "show" : ""}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon className="fa-bars" icon={faBars} />
            <FontAwesomeIcon className="fa-times" icon={faTimes} />
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <MobileNavigation show={show}></MobileNavigation>
    </>
  );
}

export default NavigationBar;
