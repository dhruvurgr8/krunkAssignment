import React from "react";
import "./header.css";
import logo from "../components/assets/logo.png";
import tick from "../components/assets/tick.png";
const Header = () => {
  return (
    <>
      <div className="parent">
        <div className="logo">
          <img width={100} src={logo} />
          <div className="intro">
            <div className="head-tick">
              <h1>Timpu </h1>
              <span>
                <img width={30} src={tick} />
              </span>
            </div>
            <h2 className="chat-assist">Chat Assistance</h2>
          </div>
        </div>

        <div className="status">
          <div className="status-icon"></div>
          <p className="status-text">Online</p>
        </div>
      </div>
    </>
  );
};

export default Header;
