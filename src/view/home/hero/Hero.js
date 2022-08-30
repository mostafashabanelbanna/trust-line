import translate from "i18n/translate";
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { isEnglish } from "utils/utils";
import "./hero.css";

const Hero = ({ section1Ref }) => {
  const textAnimProps = useSpring({
    from: { opacity: 0, transform: `translateY(50%)` },
    to: {
      opacity: 1,
      transform: `translateY(${0}%)`,
    },
  });
  const btnAnimProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  return (
    <header ref={section1Ref} className="hero_container">
      <div className="hero_bg"></div>
      <div className="overlay">
        <animated.div style={textAnimProps}>
          <h1>{translate("HeroTitle")}</h1>
          <h5>{translate("HeroDesciption")}</h5>
        </animated.div>
        <animated.div style={btnAnimProps}>
          <Link className="d-flex justify-content-center mt-5" to="/">
            <div className="skyblue_btn">{translate("ContactUs")}</div>
          </Link>
        </animated.div>
      </div>
    </header>
  );
};

export default Hero;
