import React from "react";

function Stats() {
  return (
    <div className="container p-3 mb-3">
      <div className="row mb-3">
        
        <div className="col-12 col-md-6  p-4">
          <h3 className="mb-5">Trust with confidence</h3>

          <h5 >Customer-first always</h5>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h5>No spam or gimmicks</h5>
          <p className="text-muted ">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h5>The Zerodha universe</h5>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h5>Do better with money</h5>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-6 p-4 mt-md-4">
          <img
            className="img-fluid"
            src="/media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "100%" }}
          />
          <div className="mt-3 text-center d-flex justify-content-evenly ">
            <a href="#" style={{ textDecoration: "none",color:"blue" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none",color:"blue" }}>
              Try <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
        <img className="img-fluid"  src="/media/images/pressLogos.png"  />
        </div>
    </div>
  );
}

export default Stats;
