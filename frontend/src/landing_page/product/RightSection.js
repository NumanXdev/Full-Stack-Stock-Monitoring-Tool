import React from "react";
function RightSection({ imageURL, Title, description, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-2"></div>
        <div className="col-12 col-md-3 order-2 order-md-1 ">
          <h4 className="mt-3">{Title}</h4>
          <p className="text-muted " style={{ fontSize: "13px" }}>
            {description}
          </p>
          <div className="links">
            <a className="img-fluid" href={learnMore} style={{ color: "blue" }}>
              Learn more
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-12 col-md-5 order-1 order-md-2">
          <img style={{ width: "auto",maxWidth:"100%" }} src={imageURL}  />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
