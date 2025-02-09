import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Name from "./components/Name";
import "./components/Menu.css";
import './App.css';

// 引入 FontAwesome 图标
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const location = useLocation();
  const [scanlines, setScanlines] = useState(true);
  const [background, setBackground] = useState(true);

  return (
    <div className={scanlines ? "crt" : ""}>
      <video autoPlay muted loop={background} playsInline id="background-vid">
        <source src="./compressed_bkg.mp4" type="video/mp4" />
      </video>
      <Name text={">ANIMAT"} />
      <div className="window">
        <div className="window__bar">
          <div className="window__bar-circles">
            <div className="window__bar-circle"></div>
            <div className="window__bar-circle window__bar-circle__yellow" />
            <div className="window__bar-circle window__bar-circle__green" />
          </div>
          <div>Animat AI</div>
          <div className="window__bar-filler" />
        </div>
        <p className="window__text">Raspberry Pi 3 Model B Rev 2.1</p>
        <div className="terminal__outer">
          <div className="terminal">
            <pre className="terminal__title">/home{location.pathname}</pre>
            {location.pathname != "/" && location.pathname != "/contact" && (
              <Link className="menu__return-button__small" to="/">
                <span className="material-symbols-outlined">
                  arrow_back
                </span>
              </Link>
            )}
            <Outlet />
            {location.pathname != "/" && (
              <Link className="menu__button menu__return-button" to="/">
                <span className="material-symbols-outlined menu__return-button-icon">
                  arrow_back
                </span>
                Return to Menu{" "}
              </Link>
            )}
          </div>
        </div>

        <div className="terminal__outer terminal__outer__small">
          <div className="terminal">
            <pre className="terminal__title">Accessibility</pre>
            <div className="terminal__selector">
              <label htmlFor="scanlines">Toggle Scanline Effect</label>
              <input id="scanlines" type="checkbox" checked={scanlines} onChange={e => setScanlines(e.target.checked)}></input>
            </div>
            <div className="terminal__selector">
              <label htmlFor="background">Toggle Moving Background</label>
              <input id="background" type="checkbox" checked={background} onChange={e => {
                  setBackground(e.target.checked);
                  const v = document.getElementById("background-vid");
                  if(v instanceof  HTMLVideoElement) {
                    if (e.target.checked == true) {
                      v.play()
                    } else {
                      v.pause()
                    }
                  }
                }}></input>
            </div>
          </div>
        </div>
      </div>

      {/* 右上角社交图标 */}
      <div className="social-icons">
        <a href="https://github.com/Apcoev/AnimatAI" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} color="white" size="lg" style={{ margin: "0 5px" }} />
        </a>
        <a href="https://t.me/AnimatAI" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} color="white" size="lg" style={{ margin: "0 5px" }} />
        </a>
        <a href="https://x.com/animat_ai" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} color="white" size="lg" style={{ margin: "0 5px" }} />
        </a>
      </div>
    </div>
  );
}
