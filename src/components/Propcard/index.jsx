import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";

const Propcard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Card.Body
        className="card text-center-shadow"
        style={{ backgroundColor: "slategrey", marginBottom: "100px" }}
        data-aos="fade-up"
      >
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
        <div class="card-reveal" style={{ backgroundColor: "slategrey" }}>
          <span class="card-title grey-text text-darken-4">
            <i
              class="material-icons right"
              style={{ color: "white", fontSize: "15px" }}
            >
              close
            </i>
          </span>
          <div style={{ color: "white", height: "50px" }}>About the App</div>
          <p
            style={{
              fontSize: "12px",
              color: "white",
              height: "100px",
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
                style={{ color: " rgb(49, 232, 238)", fontSize: "20px" }}
              >
                more_horiz
              </i>
            </span>
          </li>
        </div>
      </Card.Body>
    </>
  );
};

export default Propcard;
