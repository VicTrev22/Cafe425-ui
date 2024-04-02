import NavigationBar from "./navigation-bar/navigation-bar";
import "./App.css";
import Footer from "./footer/footer";
import HeroSection from "./hero-section/hero-section";

function App() {
  return (
    <>
      <svg class="pointer-events-none absolute cursor-none">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <NavigationBar></NavigationBar>
      <main>
        <HeroSection></HeroSection>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
