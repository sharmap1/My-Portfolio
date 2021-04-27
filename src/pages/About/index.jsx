import React from "react";
import Information from "../../components/Information";
import { Row, Container, Col } from "react-bootstrap";
import Adata from "../../Adata";
import "./style.css";
// import Aboutpic from "../../components/Aboutpic";
const About = () => {
  return (
    <>
      {/* <div class="clouds">
        <Aboutpic /> */}
      <Container>
        <Row>
          {Adata.map((val) => {
            return (
              <>
                <Col sm={6} md={4} lg={3}>
                  {/* <Col md={{ span: 3, offset: 0 }}> */}
                  <Information
                    key={val.id}
                    title={val.title}
                    imgsrc={val.imgsrc}
                    summary={val.summary}
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      {/* </div> */}
    </>
  );
};

export default About;
