import React from "react";
import Hero from "./hero/Hero";

const Home = ({ section1Ref }) => {
  return (
    <div>
      {" "}
      <Hero section1Ref={section1Ref} />{" "}
    </div>
  );
};

export default Home;
