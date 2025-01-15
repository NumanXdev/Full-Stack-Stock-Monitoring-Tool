import React from "react";

function Education() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 col-md-5">
          <img
            src="/media/images/education.svg"
            alt="education"
            style={{ width: "100%" }}
          />
        </div>
        {/* <div className="col col-1"></div> */}
        <div className="col-12 col-md-6 p-3 mt-5">
          <h3 className="">Free and open market education</h3>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none",color:"blue" }}>
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <br></br>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none",color:"blue"  }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
