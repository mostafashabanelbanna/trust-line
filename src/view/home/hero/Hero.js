import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { isEnglish } from "utils/utils";
import "./hero.css";

const Hero = ({ section1Ref }) => {
  //   const [del, setDel] = useState(1000);

  // const [textAnim, setTextAnim] = useState(

  //   {
  //     opac: 1,
  //     cord: 0,
  //     imm: false,
  //   }
  // );
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
    <header className="hero_container">
      <div className="hero_bg"></div>
      <div className="overlay">
        <animated.div style={textAnimProps}>
          <h1>
            {isEnglish()
              ? "ترست لاين تقدم لأعمالك الحماية "
              : "ترست لاين تقدم لأعمالك الحماية "}
          </h1>
          <h5>
            {isEnglish()
              ? "ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول الأمن السيبراني."
              : "ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول الأمن السيبراني."}
          </h5>
        </animated.div>
        <animated.div style={btnAnimProps}>
          <Link className="d-flex justify-content-center mt-5" to="/">
            <div className="skyblue_btn">
              {isEnglish() ? "تواصل معنا" : "تواصل معنا"}
            </div>
          </Link>
        </animated.div>
      </div>
    </header>
  );
};

export default Hero;
