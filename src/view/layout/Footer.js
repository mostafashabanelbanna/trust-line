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
          <Row>
            <Col sm={4}>
              <div className="footer_head mb-3">
                <Link to="/">Packages</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/"> Beauty / Glam</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/"> Travelers / CEO Executives</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/"> Athletics / Performance​</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/">Feeling Sick</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/"> Hangover​</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/">Healthy Lifestyle​</Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className="footer_head mb-3">
                <p>About</p>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/">Who We Are</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/">Locations</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/">Contacts</Link>
              </div>
              <div className="footer_sub_link  mb-2">
                <Link to="/">Our Team </Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className="footer_head mb-3">
                <p>Get the good stuff as a WeCare insider</p>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button className="w-100" variant="dark" type="submit">
                  Subscribe
                </Button>
              </Form>
              <div className="mt-5 d-flex justify-content-center">
                <a href="#" className="mx-3">
                  <AiFillFacebook size={40} />
                </a>
                <a href="#" className="mx-3">
                  <FaTwitter size={40} />
                </a>
                <a href="#" className="mx-3">
                  <AiFillInstagram size={40} />
                </a>
                <a href="#" className="mx-3">
                  <AiFillLinkedin size={40} />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="border-top mt-4 pt-4 justify-content-center">
            Copyrights © 2022 All Rights Reserved
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
