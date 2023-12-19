import React from "react";
import Header from "./Header";

function Banner() {
  return (
    <>
      <Header />
      <section id="banner" className="relative bg-[url('assets/img/banner-bg.jpg')] bg-bottom bg-cover bg-fixed w-full h-[500px] before:content-[''] before:absolute before:left-0 before:bg-[#00000099] before:w-full before:h-[500px]">
        <div className="absolute flex items-center justify-center text-white h-full w-full px-8">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold py-3 uppercase" style={{ fontFamily: "'Raleway', sans-serif" }}>Build and
              design projects</h3>
            <p className="text-base pb-5">We are team of talented designers and developers for making websites</p>
            <a href="#"
              className="inline-block rounded py-2 px-5 text-sm font-semibold uppercase border-2 hover:bg-white hover:text-gray-800 mt-4">Get
              Started</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;