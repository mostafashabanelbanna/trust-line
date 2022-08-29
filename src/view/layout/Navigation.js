import React, { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// Style
import "./navigation.css";

//
import whiteLogo from "../../assets/img/navbar/Group 3.png";
import coloredLogo from "../../assets/img/navbar/Group 3.png";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import { isEnglish } from "utils/utils";

const Navigation = ({ handleChageLanguage, currentLang, section1InView }) => {
  const [showNav, setShowNav] = useState(true);
  const [insideContainer, setInsideContainer] = useState(false);

  const controlScroll = () => {
    window.onwheel = (e) => {
      if (e.deltaY >= 0) {
        // Scrolling Down with mouse
        setShowNav(false);
      } else {
        // Scrolling Up with mouse
        setShowNav(true);
      }
    };
  };

  useEffect(() => {
    controlScroll();
  }, []);

  const expand = "lg";

  return (
    <>
      <div
        className={`navbar_container ${showNav ? "show" : ""}`}
        onMouseEnter={() => setInsideContainer(true)}
        onMouseLeave={() => setInsideContainer(false)}
      >
        <Navbar
          key={expand}
          expand={expand}
          className={
            section1InView || insideContainer ? "white_color" : "dark_color"
          }
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img
                  className="brand_logo"
                  src={
                    section1InView || insideContainer ? whiteLogo : coloredLogo
                  }
                  alt="brand_logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="nav_offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" flex-grow-1 px-5">
                  <Nav.Link>
                    <Link to="/"> {translate("ترست لاين")}</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/"> {translate("لماذا ترست لاين؟ ")}</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/book-now"> {translate("آلية العمل")}</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/client"> {translate("تواصل معنا")}</Link>
                  </Nav.Link>
                </Nav>

                <Nav className="d-flex align-items-center">
                  <>
                    <Link className="white_btn mx-5" to="/Login">
                      {" "}
                      {translate("دخول")}{" "}
                    </Link>

                    <span
                      className="lang_nav"
                      onClick={() => handleChageLanguage()}
                    >
                      {currentLang === "en-us" || !currentLang
                        ? "العربية"
                        : "ENG"}
                    </span>
                  </>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
