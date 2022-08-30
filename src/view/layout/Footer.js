import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="border-top py-4 px-md-0 px-2">
            <Col md={6} className="px-0">
              <img className="img-fluid my-2" src="img/navbar/logo_white.png" />
              <div className="my-4">
                <p className="mb-1">
                  واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564
                </p>
                <p>Trustline - جميع الحقوق محفوظة 2022</p>
              </div>
            </Col>
            <Col md={6} className="px-0 d-flex justify-content-between">
              <div>
                <ul>
                  <li>
                    <Link to="/">للشركات</Link>
                  </li>
                  <li>
                    <Link to="/">للباحثين</Link>
                  </li>
                  <li>
                    <Link to="/">بيانات التواصل</Link>
                  </li>
                  <li>
                    <Link to="/">تواصل معنا</Link>
                  </li>
                </ul>
              </div>
              <div>
                <FaLinkedinIn className="mx-4" size={30} color="#fff" />
                <FaTwitter size={30} color="#fff" />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
