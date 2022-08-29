import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsShield, BsShieldSlash } from "react-icons/bs";
import SectionTitle from "view/uiElements/sectionTitle/SectionTitle";
import "./about.css";

const About = () => {
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
        <Row className="mt-3 justify-content-center">
          <Col lg={5}>
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
            <div
              className="about_card large p-3  rounded_24 overflow-hidden position-relative text-white mb-4"
              style={{ backgroundColor: "#152F4B" }}
            >
              <div className="p-3">
                <div style={{ height: "160px" }}></div>
                <h2 className="d-block l-h-n m-0 fw-500">
                  نكون الشريك الموثوق لعملائنا.
                </h2>
                <p className="muted_color">
                  نقدم خدمات وحلول احترافية في مجال الأمن السيبراني.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div
              className="about_card large p-3  rounded_24 overflow-hidden position-relative text-white mb-4"
              style={{ backgroundColor: "#51B4FF" }}
            >
              <div className="p-3">
                <h2 className="d-block l-h-n m-0 fw-500">نقدم خدمات فعالة.</h2>
                <p className="muted_color">
                  نسعى لتقليل المخاطر على مستوى المؤسسات
                </p>
                <div style={{ height: "160px" }}></div>
              </div>
            </div>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
