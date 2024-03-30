import "./hero-section.css";
import logo from "../../public/images/cafe425-logo.png";

function HeroSection() {
  return (
    <>
      <section className="hero container">
        <img className="hero-img" src={logo} alt="Logo" />
        <h2 className="hero-subtitle">Hi, this is Cafe 425</h2>
        <h1 className="hero-title">
          Pop-up <br></br> Coffee Shop
        </h1>
        <p className="hero-description">
          We are a apartment-based <strong>pop-up cafe</strong> serving freshly
          made <strong>pastries and drinks</strong>. Check out the events
          sections to find out more.
        </p>
      </section>
    </>
  );
}

export default HeroSection;
