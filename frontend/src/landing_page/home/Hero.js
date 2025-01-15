import React from "react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/Signup");
  };
  return (
    /*                  <-----------------------   Hero  ------------------------>                     */

    <div className="container p-5 ">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero"
          className="img-fluid mb-5"
        />
        <div className="col-12">
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
        </div>
        <button
          className=" btn btn-primary  mb-5 px-4 py-2 "
          style={{ width: "auto", margin: "0 auto", whiteSpace: "nowrap" }}
          onClick={signup}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
