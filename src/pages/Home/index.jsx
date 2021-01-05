import React from "react";
import Header from "../../components/Header";
import { Row, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row md={12}>
          <Header />
        </Row>
      </Container>
    </>
  );
};
export default Home;
