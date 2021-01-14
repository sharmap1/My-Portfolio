import React from "react";
import Information from "../../components/Information";
import { Row, Container } from "react-bootstrap";
import Adata from "../../Adata";
import Aboutpic from "../../components/Aboutpic";
const About = () => {
  return (
    <>
      <div class="clouds">
        <Aboutpic />
        <Container>
          <Row md={3}>
            {Adata.map((val) => {
              return (
                <>
                  <Information
                    key={val.id}
                    title={val.title}
                    imgsrc={val.imgsrc}
                    summary={val.summary}
                  />
                </>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
