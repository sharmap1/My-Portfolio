import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";
import video from "../../img/smoke.mp4";

const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="section">
              {/* <Card.Img variant="top" src={img} /> */}
              {/* <h1>

                <span>P</span>
                <span>R</span>
                <span>A</span>
                <span>S</span>
                <span>A</span>
                <span>M</span>
                <span>S</span>
                <span>H</span>
                <span>A</span>
              </h1> */}
              <h1>
                <span>P</span>
                <span>R</span>
                <span>A</span>
                <span>S</span>
                <span>A</span>
                <span>M</span>
                <span>S</span>
                <span>H</span>
                <span>A</span>
              </h1>
              <video src={video} type="video/mp4" autoPlay muted></video>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
