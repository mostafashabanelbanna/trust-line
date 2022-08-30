import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsShield, BsShieldSlash } from "react-icons/bs";
import SectionTitle from "view/uiElements/sectionTitle/SectionTitle";

import { useSpring, animated } from "react-spring";

import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";

import "./about.css";

const About = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const firstProps = useSpring({
    from: { opacity: 0, transform: `translateY(50%)` },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? "translateY(0)" : "translateY(50%)",
    },
  });
  const secondProps = useSpring({
    from: { opacity: 0, transform: `translateY(50%)` },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? "translateY(0)" : "translateY(50%)",
    },
    delay: 300,
  });
  const thirdProps = useSpring({
    from: { opacity: 0, transform: `translateY(50%)` },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? "translateY(0)" : "translateY(50%)",
    },
    delay: 600,
  });
  const forthProps = useSpring({
    from: { opacity: 0, transform: `translateY(50%)` },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? "translateY(0)" : "translateY(50%)",
    },
    delay: 900,
  });

  return (
    <section className="bg-black">
      <Container className="about_container">
        <Row className="mt-5 justify-content-center">
          <Col xs={10}>
            <SectionTitle title="لماذا ترست لاين؟" color="#fff" />
            <p className="muted_color">
              نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى{" "}
              <span className="d-block">
                لرفع مستوى الأمن في جميع الكيانات والمؤسسات
              </span>
            </p>
          </Col>
        </Row>
        <div ref={triggerRef} />
        <Row className="mt-3 justify-content-center">
          <Col lg={5}>
            <animated.div style={firstProps}>
              <div
                className="about_card small p-3  rounded_24 overflow-hidden position-relative text-white mb-4"
                style={{ backgroundColor: "#763BBF" }}
              >
                <div className="p-3 me-5 mt-5">
                  <h2 className="d-block l-h-n m-0 fw-500">
                    نوفر مستوى عالي من الحماية.
                  </h2>
                  <p className="muted_color">
                    تعرف أكثر على دورنا في توفير الحماية.
                  </p>
                </div>
                <BsShield size={140} className="about_card_icon right" />
              </div>
            </animated.div>
            <animated.div style={secondProps}>
              <div
                className="about_card large p-3  rounded_24 overflow-hidden position-relative text-white mb-4"
                style={{ backgroundColor: "#152F4B" }}
              >
                <div className="p-3">
                  <div className="position-relative">
                    <img
                      className="d-block"
                      height={80}
                      src="img/about/Trustline landing page (5)/Group 2180.png"
                    />
                    <img
                      className="d-block"
                      height={80}
                      src="img/about/Trustline landing page (5)/Group 2178.png"
                    />
                    <img
                      className="img_layer_above"
                      height={80}
                      src="img/about/Trustline landing page (5)/Group 2179.png"
                    />
                  </div>
                  <h2 className="d-block l-h-n m-0 fw-500">
                    نكون الشريك الموثوق لعملائنا.
                  </h2>
                  <p className="muted_color">
                    نقدم خدمات وحلول احترافية في مجال الأمن السيبراني.
                  </p>
                </div>
              </div>
            </animated.div>
          </Col>
          <Col lg={5}>
            <animated.div style={thirdProps}>
              <div
                className="about_card py-3 large  rounded_24 overflow-hidden position-relative text-white mb-4"
                style={{ backgroundColor: "#51B4FF" }}
              >
                <div className="px-3">
                  <div className="px-3">
                    <h2 className="d-block l-h-n m-0 fw-500">
                      نقدم خدمات فعالة.
                    </h2>
                    <p className="muted_color">
                      نسعى لتقليل المخاطر على مستوى المؤسسات
                    </p>
                  </div>
                </div>
                <div className="pe-5 mb-3">
                  <img className="img-fluid" src="img/about/Mask group.png" />
                </div>
              </div>
            </animated.div>
            <animated.div style={forthProps}>
              <div
                className="about_card small p-3  rounded_24 overflow-hidden position-relative text-white mb-4"
                style={{ backgroundColor: "#763BBF" }}
              >
                <div className="p-3 mt-5">
                  <h2 className="d-block l-h-n m-0 fw-500">
                    نتقدم بخطوة على التهديدات السيبرانية ونقاط الضعف.
                  </h2>
                </div>
                <BsShieldSlash size={140} className="about_card_icon left" />
              </div>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
