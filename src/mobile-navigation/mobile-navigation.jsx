import PropTypes from "prop-types";
import "./mobile-navigation.css";

MobileNavigation.propTypes = {
  show: PropTypes.bool.isRequired,
  isClosing: PropTypes.bool,
  open: PropTypes.bool,
};

function MobileNavigation({ show, isClosing, open }) {
  return (
    <>
      <div
        className={`mobile-navigation ${
          show ? "mobile-navigation-shown" : ""
        } ${isClosing ? "closing-text" : ""} ${open ? "open-text" : ""}`}
      >
        <nav>
          <div className="container container-pad">
            <h1 className={`uppercase ${show ? "text-animation" : ""}`}>
              <span className="split">
                <div className="mask">
                  <div className="line">Home</div>
                </div>
              </span>
              <span className="split">
                <div className="mask">
                  <div className="line">Events</div>
                </div>
              </span>
              <span className="split">
                <div className="mask">
                  <div className="line">Contact</div>
                </div>
              </span>
            </h1>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MobileNavigation;
