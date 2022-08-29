import React from "react";
import About from "./about/About";
import Hero from "./hero/Hero";
import ServicesAndSolutions from "./servicesAndSolutions/ServicesAndSolutions";

const Home = ({ section1Ref }) => {
  return (
    <div>
      <Hero section1Ref={section1Ref} />
      <About />
      <ServicesAndSolutions />
    </div>
  );
};

export default Home;
