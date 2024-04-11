import React from "react";
import krunkLogo from "./assets/krunk.png";
import "./filter.css";

const Filter = () => {
  return (
    <>
      <div className="filter-wrapper">
        <div className="select-filter">
          <p className="select">Select Filter</p>
          <div className="filter-icon">
            <span class="material-symbols-outlined">tune</span>
            <span>Filter</span>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="active">Strap - Long X</button>
          <button>Colour X</button>
          <button>Size X</button>
          <br />
          <button>Brand X</button>
          <button>Material X</button>
        </div>
        <div className="wrap">
          <div className="inp-btn">
            <div className="icon-align">
              <input type="text" placeholder="Type your message" />
              <span class="material-symbols-outlined icon">attach_file</span>
            </div>

            <button>
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <p className="krunk">
            Powered by <span className="krunk-span">Krunk.ai</span>
            <img className="img-logo" width={30} src={krunkLogo} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Filter;
