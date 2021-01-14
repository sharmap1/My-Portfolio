import React from "react";
import "./style.css";
import videoSource from "../../img/smoke.mp4";
import Typical from "react-typical";

const Header = () => {
  return (
    <>
      <div className="Container">
        <video autoPlay="autoplay" loop="loop" muted className="Video">
          <source src={videoSource} type="video/mp4" />
        </video>

        <div className="Content">
          <div className="SubContent">
            <h1>Hi, I am Prasamsha Sharma</h1>
            <div className="section">
              <p>
                I'm a {""}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Developer 💻",
                    1000,
                    "Youtuber 🤟",
                    1000,
                    "Painter 🖌️",
                    1000,
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
