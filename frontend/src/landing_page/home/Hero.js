import React from "react";
function Hero() {
  return (

    
    /*                  <-----------------------   Hero  ------------------------>                     */


    <div className="Container p-5 ">
      <div className="row text-center">
        <img src="/media/images/homeHero.png" alt="Hero" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-6 mb-5 "
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
