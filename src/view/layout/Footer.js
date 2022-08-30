import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="border-top p-4">
            <Col sm={6}>
              <img src="img/navbar/logo_white.png" />
              <p>واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564</p>
            </Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
