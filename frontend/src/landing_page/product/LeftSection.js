import React from "react";
function LeftSection({
  imageURL,
  Title,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row  ">
        <div className="col-2 "></div>
        <div className="col-12 col-md-5  ">
          <img style={{ width: "auto" }} src={imageURL} className="img-fluid" />
        </div>
        <div className="col-12 col-md-4">
          <h4 className="mt-3">{Title}</h4>
          <p className="text-muted" style={{ fontSize: "13px" }}>
            {description}
          </p>
          <div className="links img-fluid">
            <a href={tryDemo} style={{ color: "blue" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
            <a className="ms-5" href={learnMore} style={{ color: "blue" }}>
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
          <div className="downloadLinks mt-3">
            <a href={googlePlay}>
              <img className="" src="/media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img className="mx-2" src="/media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
        <div className="col-2 "></div>
      </div>
    </div>
  );
}

export default LeftSection;
