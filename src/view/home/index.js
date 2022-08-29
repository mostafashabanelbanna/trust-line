import React from "react";
import About from "./about/About";
import Clients from "./clients/Clients";
import Hero from "./hero/Hero";
import OurTeam from "./ourTeam/OurTeam";
import ServicesAndSolutions from "./servicesAndSolutions/ServicesAndSolutions";

const Home = ({ section1Ref }) => {
  return (
    <div>
      <Hero section1Ref={section1Ref} />
      <About />
      <ServicesAndSolutions />
      <OurTeam />
      <Clients />
    </div>
  );
};

export default Home;
