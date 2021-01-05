import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img3 from "../../img/pra.JPG";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Information = () => {
  return (
    <>
      <Container style={{ backgroundColor: "black" }}>
        <Row>
          <Col md={6}>
            <Image
              src={img3}
              fluid
              style={{ marginTop: "10px", borderRadius: "15px" }}
            />
            <Card>
              {/* Hello! I'm Prasamsha Sharma. I love creating websites! */}
            </Card>
          </Col>
          <Col md={6}>
            <div className="card">
              <div className="card-body">
                <div className="card-header">About Me</div>
                <div className="card-body">
                  <p style={{ textAlign: "center" }}>
                    Full-Stack Web Developer with a passion to design beautiful
                    and functional user experiences. Focused on writing clean,
                    elegant and efficient code. Known as an innovative
                    problem-solver and team player.
                  </p>
                </div>
                <div className="card-header">My Skills</div>
                <div className="card-body">
                  <p style={{ textAlign: "center" }}>
                    Node.js, Express, JavaScript, jQuery, React.js, React
                    Native, GIT, GitHub, MongoDB, MySQL, Firebase, HTML, CSS,
                    Bootstrap, Media Queries, APIs, JSON, REST, AJAX, the
                    command line, computer science fundamentals, C#, DevOps,
                    Microsoft Visual Studio.
                  </p>
                </div>
                <div className="card-header">What I do</div>
                <div className="card-body">
                  <p style={{ textAlign: "center" }}>
                    Enjoys turning complex problems into simple, beautiful and
                    intuitive responsive designs. When not coding, loves to
                    paint, especially Buddha, trees and mountains.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Information;
