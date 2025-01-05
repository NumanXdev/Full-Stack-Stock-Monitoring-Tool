import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-1"></div>
        <div className="col ">
          <a href="#" className="mb-3 text-center" style={{ color: "blue" }}>
            <h5>Brokerage Calculator</h5>
          </a>
          <ul className="text-muted mt-4" style={{ fontSize: "13px" }}>
            <li>
              Call & Trade and RMS auto-square off: Additional charges of ₹50 +
              GST per order.
            </li>{" "}
            <br />
            <li>Digital contract notes will be sent via e-mail.</li>
            <br />
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <br />
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <br />
            <li>
              For NRI account (PIS): 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <br />
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹240 per executed order instead of ₹220 per executed
              order.
            </li>
          </ul>
        </div>
        <div className="col-3 text-center ">
          <a href="#" className="mb-3" style={{ color: "blue"}}>
            <h5>List of charges</h5>
          </a>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Brokerage;
