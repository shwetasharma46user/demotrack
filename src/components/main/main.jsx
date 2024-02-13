import React from "react";
import About from "./About";
import Count from "./Count";
import Service from "./Service";
import Contact from "./Contact";
import Portfolios from "./Portfolios";
import Blogs from "./Blogs";
import Career from "./Career";

function Main() {
  return (
    <main id="main">
      <About />
      <Count />
      <Service />
      <Portfolios />
      <Career />
      <Blogs />
      <Contact />
    </main>
  )
}

export default Main;