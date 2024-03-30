import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./navigation-bar.css";
import MobileNavigation from "../mobile-navigation/mobile-navigation";

function NavigationBar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const handleCloseMenu = () => {
    setIsClosing(true); // Start the closing animation
    setOpen(false);
    setTimeout(() => {
      setShow(false);
      setIsClosing(false); // Reset the closing state
    }, 500); // Delay should match the duration of the text animation
  };

  // Your toggle function might need adjustment to call handleCloseMenu when closing
  const toggleMenu = () => {
    if (show) {
      handleCloseMenu();
    } else {
      setShow(true);
      setOpen(true);
    }
  };

  return (
    <>
      <header className="header container">
        <p>Cafe425</p>
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
                About
              </a>
            </li>
            <li>
              <a className="header-link" href="#contact">
                Contact
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
      <MobileNavigation
        show={show}
        isClosing={isClosing}
        open={open}
      ></MobileNavigation>
    </>
  );
}

export default NavigationBar;
