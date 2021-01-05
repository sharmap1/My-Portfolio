import React from "react";
import Information from "../../components/Information";
import { Row, Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container>
        <Row md={12}>
          <Information />
        </Row>
      </Container>
    </>
  );
};
export default About;
