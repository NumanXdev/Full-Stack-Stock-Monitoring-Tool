import React from "react";
import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const Navigate = useNavigate();

  const signup = () => {
    Navigate("/Signup");
  };

  return (
    /*                  <-----------------------   Hero  ------------------------>                     */

    <div className="container p-5 ">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-6 mb-5 "
          style={{ width: "15%", margin: "0 auto" }}
          onClick={signup}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
