import React from "react";
function RightSection({ imageURL, Title, description, learnMore }) {
  return (
    <div className=".container">
      <div className="row mb-5">
        <div className="col-2"></div>
        <div className="col-2 mt-5 p-3">
          <h4 className="mt-5">{Title}</h4>
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
            {description}
          </p>
          <div className="links">
            <a className="" href={learnMore} style={{ color: "blue" }}>
              Learn more
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5 ms-2">
          <img style={{ width: "90%" }} src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
