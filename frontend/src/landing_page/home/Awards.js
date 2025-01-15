import React from "react";

function Awards() {
  return (
    <div className="container mb-5 ">
      <div className="row ">
        <div className="col col-6  ">
          <img src="/media/images/largestBroker.svg" alt="Award" className="img-fluid " style={{ minWidth: "20rem"}}/>
        </div>
        <div className="col-12 col-md-6 p-3">
          <h1 className="">Largest stock broker in India</h1>
          <p className="mb-4 mt-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in :
          </p>
          <div className="row">
            <div className="col col-6">
              <ul className="">
                <li className="">
                  <p>Future and Options</p>
                </li>
                <li className="">
                  <p className="">Commodity derivatives</p>
                </li>
                <li className="">
                  <p className="">Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col col-6 mb-5">
              <ul className="">
                <li className="">
                  <p>Stock & IPO'</p>
                </li>
                <li className="">
                  <p className="">Direct mutual funds</p>
                </li>
                <li className="">
                  <p className="">Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              className="mt-2 img-fluid"
              src="/media/images/pressLogos.png"
              alt="Press Logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
