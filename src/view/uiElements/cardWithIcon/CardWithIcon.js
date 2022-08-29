import React from "react";
import { Col, Row } from "react-bootstrap";
import "./cardWithIcon.css";

const CardWithIcon = ({ title, icon, description }) => {
  return (
    <Row className="card_with_icon rounded_24 mb-4">
      <Col className="right_side text-center" xs={5}>
        <img className="mb-2" src={icon} width="40" />
        <h3>{title}</h3>
      </Col>
      <Col xs={7}>
        <p className="muted_color">{description}</p>
      </Col>
    </Row>
  );
};

export default CardWithIcon;
