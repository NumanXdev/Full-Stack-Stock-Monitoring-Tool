import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-2"></div> */}
        <div className=" col-12 text-center text-muted mt-5 mb-5 border-bottom pb-5 px-5  ">
          <h4>We pioneered the discount broking model in India.</h4>
          <h4>Now, we are breaking ground with our technology.</h4>{" "}
        </div>
        {/* <div className="col-2"></div> */}
      </div>

      <div className="row">
        <div className="col-2"></div>
        <div className="col-12 col-md-4 p-3 text-muted  " style={{fontSize:"13px"}}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 text-muted" style={{fontSize:"13px"}}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{color:"blue"}}>Rainmatter</a> ,our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p>
          And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="" style={{color:"blue"}}>blog</a> or see what the media is <a href="" style={{color:"blue"}}>saying about us</a>.
          </p>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
