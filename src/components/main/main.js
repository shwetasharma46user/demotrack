import React from "react";
import About from "./about";
import Count from "./count";
import Service from "./service";
import Portfolio from "./portfolio";
import Career from "./career";
import Blog from "./blog";
import Contact from "./contact";

function Main() {
  return (
    <main id="main">
      <About />
      <Count />
      <Service />
      <Portfolio />
      <Career />
      <Blog />
      <Contact />
    </main>
  )
}

export default Main;