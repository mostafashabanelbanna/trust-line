import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardWithIcon from "view/uiElements/cardWithIcon/CardWithIcon";
import SectionTitle from "view/uiElements/sectionTitle/SectionTitle";
import { useSpring, animated } from "react-spring";

import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";

import "./servicesAndSolutions.css";

const ServicesAndSolutions = () => {
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
    delay: 500,
  });
  return (
    <section className="services_and_solutions">
      <Container className="services_and_solutions_container rounded_24">
        <Row className="pt-5 justify-content-center">
          <Col lg={5} className="px-4">
            <SectionTitle title="الخدمات والحلول" color="#201F1F" />
            <p className="muted_color">
              نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
            </p>
            <div ref={triggerRef} />
            <animated.div style={firstProps}>
              <CardWithIcon
                title="تقييم الضعف"
                icon="img/services/Vector.png"
                description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان."
              />
            </animated.div>
            <animated.div style={secondProps}>
              <CardWithIcon
                title="مراجعة كود المصدر"
                icon="img/services/Layer 2.png"
                description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان."
              />
            </animated.div>
          </Col>
          <Col lg={5} className="px-4">
            <animated.div style={firstProps}>
              <CardWithIcon
                title="الفريق الأحمر"
                icon="img/services/people.png"
                description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان."
              />
            </animated.div>
            <animated.div style={secondProps}>
              <CardWithIcon
                title="المصادر الأمنية"
                icon="img/services/shield.png"
                description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان."
              />
            </animated.div>
            <animated.div style={secondProps}>
              <CardWithIcon
                title="فحص الموقع والجوال"
                icon="img/services/keyboard-open.png"
                description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان."
              />
            </animated.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesAndSolutions;
