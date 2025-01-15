import React from "react";
function RightSection({ imageURL, Title, description, learnMore }) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-2"></div>
        <div className="col-12 col-md-3 mt-5 order-2 order-md-1 ">
          <h4 className="mt-md-5">{Title}</h4>
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
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
        <div className="col-12 col-md-5 ms-2 order-1 order-md-2">
          <img style={{ width: "90%" }} src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
