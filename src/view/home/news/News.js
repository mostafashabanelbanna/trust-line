import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "view/uiElements/listItem/ListItem";
import SectionTitle from "view/uiElements/sectionTitle/SectionTitle";

import "./news.css";

const data = [
  {
    title:
      "الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية",
    description:
      "شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات",
    photo: "Screenshot (184).png",
  },
  {
    title:
      "الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية",
    description:
      "تطبيقات البرمجيات هي مكونات أساسية لنجاح المنظمة. لسوء الحظ ، بينما التطبيق",
    photo: "Screenshot (185).png",
  },
  {
    title:
      "الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية",
    description:
      "نمت شعبية برامج الأمن الجماعي إلى الحد الذي وصلت إليه بعض الشركات",
    photo: "Screenshot (185).png",
  },
];

const News = () => {
  return (
    <section className="news">
      <Container className="py-5">
        <Row className="py-5 mt-5">
          <Col lg={5} className="px-4">
            <SectionTitle title="الأخبار" color="#fff" />
          </Col>
        </Row>
        <Row>
          {data.map((newsItem) => (
            <ListItem
              title={newsItem.title}
              description={newsItem.description}
              photo={newsItem.photo}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default News;
