import React from "react";

function Pricing() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col col-5 p-5">
          <h3 className="">Unbeatable pricing</h3>
          <p className="">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div>
            <a style={{ textDecoration: "none" }} href="#">
              See pricing{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        {/* <div className="col col-1"></div> */}

        <div className="col col-6 mt-3">
          <div className="row">
            <div className="col">
              <img src="/media/images/pricing-eq (1).svg" alt="price" />
              <p style={{ fontSize: "10px", textAlign: "center" }}>
                Free account opening
              </p>
            </div>
            <div className="col">
              <img src="/media/images/pricing-eq (1).svg" alt="price" />
              <p style={{ fontSize: "10px", textAlign: "center" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col">
              <img src="/media/images/other-trades.svg" alt="price" />
              <p style={{ fontSize: "10px", textAlign: "center" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
