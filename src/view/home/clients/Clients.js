import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./clients.css";
import SectionTitle from "view/uiElements/sectionTitle/SectionTitle";

const Clients = () => {
  return (
    <Container className="my-5">
      <Row className="py-5">
        <Col lg={5} className="px-4">
          <SectionTitle title="عمـلاؤنـا" color="#201F1F" />
        </Col>
      </Row>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={2}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="clients_slide rounded_24 mx-auto">
              <img className="img-fluid" src="img/clients/logo-01.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients_slide rounded_24 mx-auto">
              <img className="img-fluid" src="img/clients/zid-logo.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients_slide rounded_24 mx-auto">
              <img className="img-fluid" src="img/clients/logo-03.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients_slide rounded_24 mx-auto">
              <img className="img-fluid" src="img/clients/logo-01.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients_slide rounded_24 mx-auto">
              <img className="img-fluid" src="img/clients/logo-03.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients_slide rounded_24 mx-auto">
              <img className="img-fluid" src="img/clients/zid-logo.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </Container>
  );
};

export default Clients;
