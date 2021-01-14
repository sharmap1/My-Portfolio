import React from "react";
import Header from "../../components/Header";
import { Row, Container, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
