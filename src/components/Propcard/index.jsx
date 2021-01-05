import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import "./style.css";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";

const Propcard = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div
              className="container-fluid"
              style={{
                fontFamily: " 'Handlee', cursive",
                backgroundColor: "rgb(195, 236, 241)",
              }}
            >
              <div className="row">
                <Card.Body className="card text-center-shadow">
                  <div className="overflow">
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={props.imgsrc}
                      alt="image"
                      style={{ height: "200px" }}
                    />
                  </div>
                  <Card.Header as="h5" className="header">
                    {props.title}
                  </Card.Header>
                  <div
                    class="card-reveal"
                    style={{ backgroundColor: "slategrey" }}
                  >
                    <span class="card-title grey-text text-darken-4">
                      <i
                        class="material-icons right"
                        style={{ color: "white", fontSize: "15px" }}
                      >
                        close
                      </i>
                    </span>
                    <div style={{ color: "white", height: "50px" }}>
                      About the App
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "white",
                        height:'100px'
                      }}
                    >
                      {props.summary}
                    </p>
                    <div class="icons">
                      <span>
                        <a
                          href={props.github}
                          style={{
                            fontSize: "20px",
                            color: "white",
                            marginRight: "20px",
                          }}
                        >
                          <VscGithub />
                        </a>
                      </span>
                      <span>
                        <a
                          href={props.link}
                          style={{
                            fontSize: "20px",
                            color: "white",
                          }}
                        >
                          <VscLinkExternal />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div class="icons">
                    <li>
                      <span class="card-title activator grey-text text-darken-4">
                        <i
                          class="material-icons left"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          more_horiz
                        </i>
                      </span>
                    </li>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Propcard;
