import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Education />
      <Navbar />
      <Pricing />
      <Stats />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
