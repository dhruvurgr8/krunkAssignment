import React from "react";
import bag from "./assets/bag.png";
import tick from "./assets/tick.png";
import "./handbag.css";
const Handbag = () => {
  return (
    <>
      <div className="handbag-container">
        <p>Popular tags for handbag</p>
        <div className="btn-group">
          <button>Clutch</button>
          <button>Fabric Lining</button>
          <button>Baggit</button>
          <button>Multi</button>
        </div>
        <div className="bag-info">
          <div className="bag">
            <div className="white-div">
              <div className="bag-img">
                <img width={100} src={bag} />
              </div>
              <div className="content">
                <div className="para-tick">
                  <p>
                    Bags on Thimpu{" "}
                    <span>
                      <img src={tick} />
                    </span>
                  </p>
                </div>
                <p>1123 Products</p>
              </div>
            </div>
            <p className="filter-para">
              Or set filter and help us choose the best bag for you.
            </p>
          </div>
          <div className="msg"></div>
        </div>
      </div>
    </>
  );
};

export default Handbag;
