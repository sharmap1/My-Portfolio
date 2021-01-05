import React from "react";
import { VscGithub } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <div className="footer">
              <span>
                <VscGithub
                  style={{ color: "white", margin: "100px", fontSize: "50px" }}
                />
              </span>
              <span>
                <GrLinkedin style={{ color: "white", fontSize: "50px" }} />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
