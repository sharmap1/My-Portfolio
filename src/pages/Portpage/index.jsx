import React from "react";
import Sdata from "../../Sdata";
import { Row, Container, Col } from "react-bootstrap";
import Propcard from "../../components/Propcard";

function Portpage() {
  return (
    <>
      <Container>
        <Row>
          {Sdata.map((val) => {
            return (
              <>
                <Col xs={12} md={4} lg={3}>
                  <Propcard
                    key={val.id}
                    title={val.title}
                    imgsrc={val.imgsrc}
                    summary={val.summary}
                    github={val.github}
                    link={val.link}
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Portpage;
