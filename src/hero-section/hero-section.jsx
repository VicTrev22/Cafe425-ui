import "./hero-section.css";
import FaqSection from "../faq-section/faq-section";
import {
  faArrowRight,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <>
      <section className="hero2 container">
        <h1 className="home-page-header__top__title">
          <span className="word-wrap">
            <span className="word-wrap__inner">we</span>
          </span>
          <span className="word-wrap">
            <span className="word-wrap__inner">brew</span>
          </span>
          <span className="word-wrap">
            <span className="word-wrap__inner">new</span>
          </span>
          <span className="word-wrap">
            <span className="word-wrap__inner">experiences</span>
          </span>
        </h1>
        <div className="grid home-page-header__top__content">
          <div className="home-page-header__top__content__intro">
            <div className="home-page-header__top__content__intro_desc">
              <div className="root_jtbPU">
                <p>
                  Your invitation to experience{" "}
                  <strong>handcrafted pastries and drinks</strong>. Catch us at
                  our next pop-up and enjoy this{" "}
                  <strong>unique apartment-based café</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="webexplain bg-salmon workexplain border2rem">
        <div className="event-section">
          <h1 className="event-title">Come Join The Event.</h1>
          <div className="event-title2">
            <p>
              Anim velit proident sunt commodo labore quis laborum ipsum esse
              esse aliqua ea.
            </p>
          </div>
          <div className="boxholder sidebar-item sidebar-image">
            {/* Placeholder for image - use an actual <img> tag or a component */}
            <span className="image-placeholder"></span>
            <div className="date-box">
              <span className="date-day">Apr 20</span>
            </div>
            <div className="box bottom event-overlay">
              <div className="event-name">
                <h2 className="event-header">Event Name1</h2>
                <div className="event-icons">
                  <p className="event-date  ">
                    <FontAwesomeIcon icon={faLocationDot} />
                    The Maxwell
                  </p>
                  <p className="event-date  ">
                    <FontAwesomeIcon icon={faClock} />
                    9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
              <p className="event-date">
                Click to order <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-sec">
        <div className="move-footer-down"></div>
        <FaqSection></FaqSection>
      </section>
      {/* <section className=" sidebar-section container">
        <div class="rightcontainer gap2rem widget">
          <div class="item"></div>
          <h4>Have a coffee with us</h4>

          <p>
            <a href="tel: 92425529" aria-label="Methods phone number">
              Phone: (08) 9242 5529
            </a>{" "}
            <br></br>
            <a href="mailto: hello@method.au" aria-label="Methods Email">
              Email: hello@method.au
            </a>{" "}
            <br></br>
            <a
              href="https://goo.gl/maps/hUe1rEPz4PQrzSSk8"
              aria-label="See where we are located"
            >
              Address: 183 Scarborough Beach Road, Mount Hawthorn, Western
              Australia
            </a>
          </p>
          <a
            href="https://calendly.com/methodau/discovery-call"
            target="_blank"
            class="button viewwork bg-black green-text"
            aria-label="Methods book a meeting"
          >
            Book a meeting
            <div class="innerbuttoncirclewrapper">
              <div class="innerbuttoncircle bg-green">
                <div class="innerbuttoncirclearrow invert"></div>
              </div>
            </div>
          </a>
        </div>
      </section> */}
    </>
  );
}

export default HeroSection;
