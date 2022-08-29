import React from "react";
import About from "./about/About";
import Hero from "./hero/Hero";

const Home = ({ section1Ref }) => {
  return (
    <div>
      <Hero section1Ref={section1Ref} />
      <About />
    </div>
  );
};

export default Home;
