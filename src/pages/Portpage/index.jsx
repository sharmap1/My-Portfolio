import React from "react";
import Sdata from "../../Sdata";
import { Row, Container } from "react-bootstrap";
import Propcard from "../../components/Propcard";

function Portpage() {
  return (
    <>
      <Container>
        <Row md={3}>
          {Sdata.map((val) => {
            return (
              <>
                <Propcard
                  key={val.id}
                  title={val.title}
                  imgsrc={val.imgsrc}
                  summary={val.summary}
                  github={val.github}
                  link={val.link}
                />
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Portpage;
