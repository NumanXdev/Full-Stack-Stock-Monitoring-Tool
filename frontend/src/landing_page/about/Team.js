import React from "react";
function Team() {
  return (
    <div className="container">
      <h3 className="text-center mt-3 pt-5 mb-5 text-muted">People</h3>
      <div className="row mb-5">
        <div className="col-12 col-md-4  text-center">
          <img
            className="img-fluid"
            src="/media/images/numan(1)(1).png"
            style={{ borderRadius: "20px", maxWidth: "230px" }}
          />
          <div className="name mt-2 text-muted">
            <b>Mohammad Numan</b>
          </div>
          <div className="role text-muted" style={{ fontSize: "12px" }}>
            Founder, CEO
          </div>
        </div>
        <div
          className="col-12 col-md-6 mt-4 mt-md-0 text-muted lh-lg text-left"
          style={{ fontSize: "15px" }}
        >
          <p>
            Numan is a Full Stack Developer and a Computer Science student at
            GCET Kashmir. He is on a journey to innovate and solve problems
            using technology, with a focus on building scalable and impactful
            web applications.
          </p>
          <p>
            Currently, Numan is diving deep into MERN stack development,
            exploring Redux Toolkit, and expanding his expertise in backend and
            frontend technologies.
          </p>
          <p>
          When he's not coding, Numan enjoys reading books, exploring emerging tech trends, brainstorming creative ideas, and constantly learning to enhance his skills and knowledge.
          </p>
          <p>
            Connect on &nbsp;
            <a href="https://github.com/NumanXdev" target="_blank" style={{ color: "blue" }}>
              Github
            </a>
            &nbsp; /
            <a href="https://www.linkedin.com/in/numan10" target="_blank" style={{ color: "blue" }}>
              &nbsp; LinkedIn
            </a>
            &nbsp; 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
