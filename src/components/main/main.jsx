import React from "react";
import About from "./About";
import Count from "./Count";
import Service from "./Service";
import Career from "./Career";
import Contact from "./Contact";
import Portfolios from "./Portfolios";
import Blogs from "./Blogs";

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