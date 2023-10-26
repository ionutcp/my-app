import About from "./About/About";
import Hero from "./Hero/Hero";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";

function Homepage() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Homepage;
