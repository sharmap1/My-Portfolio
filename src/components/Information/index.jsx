import React, { useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Information = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <Container>
        <Row>
          <Col> */}
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <div class="infocard">
          <div class="infoicon">
            <i class="material-icons md-36">expand_more</i>
          </div>
          <p class="infotitle">{props.title}</p>
          <p class="infotext">{props.summary}</p>
        </div>
      </div>
      {/* </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Information;
