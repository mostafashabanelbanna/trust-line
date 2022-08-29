import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./listItem.css";

const ListItem = ({ title, description, photo }) => {
  return (
    <Col xs={12} className="list_item rounded_24 mb-3">
      <img className="rounded_24" src={`img/news/${photo}`} />
      <article className="px-5 d-flex flex-column justify-content-center">
        <h4>{title}</h4>
        <p className="muted_color">{description}</p>
        <Link to="/" className="read_more">
          اقرأ المقال
        </Link>
      </article>
    </Col>
  );
};

export default ListItem;
