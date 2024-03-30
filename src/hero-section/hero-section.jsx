import "./hero-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/images/cafe425-logo.png";
import FaqSection from "../faq-section/faq-section";

function HeroSection() {
  return (
    <>
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">
            Pop Into <br></br>Cafe425
          </h1>
          <p className="hero-description">
            Your invitation to experience{" "}
            <strong>handcrafted pastries and drinks</strong>. Catch us at our
            next pop-up and enjoy the unique charm of our apartment-based café.
          </p>
          <div className="hero-buttons">
            <button className="primary-button btn">Explore Events</button>
            <button className="secondary-button btn">
              <span className="button-text">Stay Connected</span>
            </button>
          </div>
        </div>
      </section>
      <section className=" sidebar-section container">
        <div>
          <div className="sidebar-item">
            <h2 className="sidebar-title">
              Discover the Latest Pop-ups at Cafe425 and Place Your Order Today
            </h2>
            <p className="sidebar-description">
              Explore our upcoming events and get ready to indulge in delicious
              treats and refreshing drinks. Click the 'Order' button to start
              your culinary adventure.
            </p>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">📅</span>
            <h3 className="sidebar-subtitle">Upcoming Events</h3>
            <p className="sidebar-description">
              Check out our exciting lineup of upcoming pop-ups featuring
              mouthwatering dishes and delightful beverages.
            </p>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">🛒</span>
            <h3 className="sidebar-subtitle">Order Now</h3>
            <p className="sidebar-description">
              Don’t miss out on the opportunity to savor these limited-time
              culinary creations.
            </p>
          </div>
          <div className="sidebar-item sidebar-image">
            {/* Placeholder for image - use an actual <img> tag or a component */}
            <span className="image-placeholder"></span>
          </div>
        </div>
      </section>
      <section className=" sidebar-section container">
        <FaqSection></FaqSection>
      </section>
    </>
  );
}

export default HeroSection;
