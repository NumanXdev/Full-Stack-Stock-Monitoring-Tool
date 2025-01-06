import React from "react";
function Hero() {
  return (
    <section className="" id="supportWrapper">
      <div className="container">
        <div className="row py-5  ">
          <div className="d-flex justify-content-between">
            <div>
              <h4 style={{ color: "white", fontSize: "20px" }}>
                Support Portal
              </h4>
            </div>
            <div>
              <a href="#" id="track" className="border-bottom py-1">
                Track Tickets
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7 p-2 mb-5">
            <h5 style={{ color: "white", fontSize: "25px" }} className="mb-3">
              Search for an answer or browse help topics to create a ticket
            </h5>

            

<div
  className="d-flex align-items-center mb-3"
  style={{ gap: "10px", width: "100%" }}
>
  <input
    placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
    className="form-control w-75 p-3"
    style={{ flex: 1 }}
  />
  <i
    className="fa-solid fa-magnifying-glass fa-2xl"
    style={{ cursor: "pointer"}}
  ></i>
</div>
            <div className="d-flex flex-wrap ">
              <a href="" className=" m-2 py-1 border-bottom" style={{color:"white"}}>Track account opening</a>
              <a href="" className=" m-2 py-1 border-bottom" style={{color:"white"}} >Track segment activation</a>
              <a href="" className=" m-2 py-1 border-bottom" style={{color:"white"}}>Intraday margins</a>
              <a href="" className=" m-2 py-1 border-bottom" style={{color:"white"}}>Kite user manual</a>
            </div>
          </div>
          <div className="col p-4 mx-3 ">
            <h4 className="" style={{color:"white"}}>Featured</h4>
            <ol className="">
                <a href=" " style={{color:"white"}} ><li className="features ">BSE StAR mutual fund platform downtime</li></a>
                <a href=" " style={{color:"white"}} ><li className="features  mt-3">Surveillance measure on scrips - January 2025</li></a>
                
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
