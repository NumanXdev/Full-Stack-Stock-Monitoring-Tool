import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>

        <div className="col mt-4">
          <h2 className="text-center">The Zerodha Universe</h2>
          <p className="text-center">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="universe d-flex align-items-center justify-content-around text-center">
            <div className="first p-3">
              <img
                className=""
                src="/media/images/zerodhaFundhouse.png"
                style={{ width: "8rem" }}
              />
              <p style={{ fontSize: "10px" }} className="mt-3">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>{" "}
              <br />
              <img
                className=""
                src="/media/images/streakLogo.png"
                style={{ width: "8rem" }}
              />
              <p style={{ fontSize: "10px" }} className="mt-3">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
            <div className="second p-3">
              <img
                className=""
                src="/media/images/sensibullLogo.svg"
                style={{ width: "8rem" }}
              />
              <p style={{ fontSize: "10px" }} className="mt-3">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>{" "}
              <br />
              <img
                className=""
                src="/media/images/smallcaseLogo.png"
                style={{ width: "8rem" }}
              />
              <p style={{ fontSize: "10px" }} className="mt-3">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
            <div className="Third p-3">
              <img
                className=""
                src="/media/images/tijori.svg"
                style={{ width: "8rem" }}
              />
              <p style={{ fontSize: "10px" }} className="mt-3">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>{" "}
              <br />
              <img
                className=""
                src="/media/images/dittoLogo.png"
                style={{ width: "7rem" }}
              />
              <p style={{ fontSize: "10px" }} className="mt-3">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <button
        className="btn btn-primary d-block mx-auto mt-4 mb-5"
        style={{ width: "20%" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
