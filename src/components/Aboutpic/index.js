import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "../../img/take3.JPG";

const Aboutpic = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Card style={{ borderRadius: "100%", backgroundColor: "black" }}>
                <Image
                  variant="top"
                  src={img2}
                  style={{
                    borderRadius: "100%",
                    height: "300px",
                    boxShadow: "5px 10px  50px lightblue",
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutpic;
