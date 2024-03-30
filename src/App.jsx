import NavigationBar from "./navigation-bar/navigation-bar";
import "./App.css";
import Footer from "./footer/footer";
import HeroSection from "./hero-section/hero-section";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main>
        <section></section>
        <HeroSection></HeroSection>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
