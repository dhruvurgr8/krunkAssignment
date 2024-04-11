import React from "react";
import Header from "./components/Header";
import ChatContainer from "./components/ChatContainer";
import "./App.css";
import Handbag from "./components/Handbag";
import Filter from "./components/Filter";
const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <ChatContainer />
        <Handbag />
        <Filter />
      </div>
    </>
  );
};

export default App;
