import React from "react";
import "./chat-container.css";
const ChatContainer = () => {
  return (
    <>
      <div className="chat-container">
        <div className="first-chat">
          <p className="chat-content-1">
            Hi Sam! I am your personal <br /> shopping assistant, how can i
            <br /> help you today?
          </p>
          <p className="time">4:45 PM</p>
        </div>
        <div className="second-chat">
          <p className="chat-content-2">
            I am looking for a hand bag,
            <br /> with long strap
          </p>
          <p className="time2">4:46 PM</p>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
