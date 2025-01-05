import React from "react";
import OpenAccount from "../OpenAccount";
function Hero() {
  return (
    <div className="container">
      <div className=" text-center mt-5 mb-5">
        <h3 className="fs-1">Charges</h3>
        <p className="text-muted">List of all charges and taxes</p>
      </div>
      <div className="row ">
        <div className="col-1"></div>
        <div className="mt-5  d-flex flex-wrap flex-md-nowrap col pricing text-center">
          <div className="first  mt-5">
            <img
              className=""
              src="/media/images/pricing-eq (1).svg"
              style={{ width: "15rem" }}
            />
            <h5 className="fs-5">Free equity delivery</h5>
            <p className="px-2" style={{ fontSize: "12px" }}>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="second mt-5 ">
            <img
              className=""
              src="/media/images/other-trades.svg"
              style={{ width: "15rem" }}
            />
            <h5 className="">Intraday and F&O trades</h5>
            <p className="px-4" style={{ fontSize: "12px" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="third mt-5 ">
            <img
              src="/media/images/pricing-eq (1).svg"
              style={{ width: "15rem" }}
            />
            <p className="">
              <h5>Free direct MF</h5>
              <p className="px-2" style={{ fontSize: "12px" }}>
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </p>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <OpenAccount />
      <hr/>
    </div>
  );
}

export default Hero;
