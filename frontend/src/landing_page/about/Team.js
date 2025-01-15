import React from "react";
function Team() {
  return (
    <div className="container">
      <h3 className="text-center mt-5 pt-5 mb-5 text-muted">People</h3>
      <div className="row mb-5">
      
        <div className="col-12 col-md-4  text-center">
          <img
            className="img-fluid"
            src="/media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", maxWidth:"230px"}}
             
            
          />
          <div className="name mt-2 text-muted"><b>Nithin Kamath</b></div>
          <div className="role text-muted" style={{fontSize:"12px"}}>Founder, CEO</div>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0 text-muted lh-lg text-left" style={{fontSize:"15px"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a href="#" style={{ color: "blue" }}>
              Homepage
            </a>&nbsp;
            /
            <a href="#" style={{ color: "blue" }}>&nbsp;
              TradingQnA
            </a>&nbsp;
            /
            <a href="#" style={{ color: "blue" }}>&nbsp;
              Twitter
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Team;
