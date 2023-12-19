import React from "react";
import Header from "../header";

const Service = (props) => {
  const {titleService} = props;
  return (
    <>
    <Header/>
    <section id="services" class="py-14 bg-white">
      <div class="max-w-7xl mx-auto px-3">
        <div class="text-left pb-5">
          <h5
            class="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
            {titleService.serviceTitle}
          </h5>
          <h3 class="text-2xl md:text-3xl font-extrabold uppercase text-black"
            style={{ fontFamily: "'Raleway', sans-serif" }}>
              {titleService.serviceSubtitle}
          </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ducimus dicta odio, at
            voluptatem saepe quas accusantium nam eius sunt praesentium illum incidunt alias nostrum
            repellendus! Repudiandae ut earum vitae.</p>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
          <div class="flex items-center justify-center px-2 my-3">
            <div
              class="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i class="fa-brands fa-dribbble text-4xl text-gray-400 group-hover:text-black "></i>
              <h3 class="font-bold text-lg py-2" style={{ fontFamily: "'Raleway', sans-serif" }}>Software Development</h3>
              <p class="text-gray-500 text-sm">
                PeersTrack develops quality software and offers related services –
                software consulting, cloud migration, app integration, and more.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center px-2 my-3">
            <div
              class="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i class="fa-brands fa-dribbble text-4xl text-gray-400 group-hover:text-black "></i>
              <h3 class="font-bold text-lg py-2" style={{ fontFamily: "'Raleway', sans-serif" }}>Website Development</h3>
              <p class="text-gray-500 text-sm">
                PeersTrack's web developers help brands succeed in the ever-changing
                digital landscape by creating customer-focused, customer-centric website
                solutions.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center px-2 my-3">
            <div
              class="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i class="fa-brands fa-dribbble text-4xl text-gray-400 group-hover:text-black "></i>
              <h3 class="font-bold text-lg py-2" style={{ fontFamily: "'Raleway', sans-serif" }}>Full Stack Development</h3>
              <p class="text-gray-500 text-sm">
                Full-stack developers from PeersTrack are skilled in everything from the
                concept and idea to the finished product.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center px-2 my-3">
            <div
              class="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i class="fa-brands fa-dribbble text-4xl text-gray-400 group-hover:text-black "></i>
              <h3 class="font-bold text-lg py-2" style={{ fontFamily: "'Raleway', sans-serif" }}>Website Design</h3>
              <p class="text-gray-500 text-sm">
                You can rely on our team of designers and developers to produce the
                product you are looking for across a range of platforms and devices.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center px-2 my-3">
            <div
              class="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i class="fa-brands fa-dribbble text-4xl text-gray-400 group-hover:text-black "></i>
              <h3 class="font-bold text-lg py-2" style={{ fontFamily: "'Raleway', sans-serif" }}>Website Design</h3>
              <p class="text-gray-500 text-sm">
                You can rely on our team of designers and developers to produce the
                product you are looking for across a range of platforms and devices.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center px-2 my-3">
            <div
              class="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i class="fa-brands fa-dribbble text-4xl text-gray-400 group-hover:text-black "></i>
              <h3 class="font-bold text-lg py-2" style={{ fontFamily: "'Raleway', sans-serif" }}>HR portals</h3>
              <p class="text-gray-500 text-sm">
                We create secure, fast, and robust HR portals using the latest
                technologies. Our team always finds the best solution for you.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center px-2 my-3">
            <div
              class="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i class="fa-brands fa-dribbble text-4xl text-gray-400 group-hover:text-black "></i>
              <h3 class="font-bold text-lg py-2" style={{ fontFamily: "'Raleway', sans-serif" }}>Full Satck Development</h3>
              <p class="text-gray-500 text-sm">
                We create secure, fast, and robust HR portals using the latest
                technologies. Our team always finds the best solution for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Service;