import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "view/uiElements/sectionTitle/SectionTitle";

import "./ourTeam.css";

import { useSpring, animated } from "react-spring";

import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";

const OurTeam = () => {
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
    <Container className="our_team">
      <div ref={triggerRef} />
      <Row>
        <Col md={6} className="d-flex px-0">
          <animated.img
            style={firstProps}
            className="first_img rounded_24 mx-2"
            src="img/team/Group 2282.png"
          />
          <animated.img
            style={secondProps}
            className="second_img rounded_24"
            src="img/team/Group 2284.png"
          />
        </Col>

        <Col
          className="gray_bg_side_container px-0 d-flex align-items-center"
          md={6}
          xs={12}
        >
          <animated.div style={thirdProps} className="gray_bg_side w-100">
            <SectionTitle title="فريقـنا" color="#4F4F4F" />
            <p className="muted_color">
              نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى{" "}
              <span className="d-block">
                لرفع مستوى الأمن في جميع الكيانات والمؤسسات
              </span>
            </p>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurTeam;
