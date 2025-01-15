import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css"
function Hero() {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/Signup");
  };
  return (


    <div className="container p-2 mt-4 mb-5 ">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero"
          className="img-fluid mb-5 hero-image"
          style={{width:"auto",maxHeight:"auto"}}
        />
        <div className="col-12"> 
          <h2 className="mt-5">Invest in everything</h2>
          <p className="text-muted">
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
