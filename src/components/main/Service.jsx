import React from "react";
import Header from "../Header";
import Heading from "../shared/Heading";

const Service = (props) => {
  const {titleService} = props;
  return (
    <>
    <Header/>
    <section id="services" className="bg-white py-14">
      <div className="px-3 mx-auto max-w-7xl">
        <Heading titleList={["serviceTitle", "serviceSubTitle"]}/>
        <div className="grid items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-center px-2 my-3">
            <div
              className="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i className="text-4xl text-gray-400 fa-brands fa-dribbble group-hover:text-black "></i>
              <h3 className="py-2 text-lg font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>Software Development</h3>
              <p className="text-sm text-gray-500">
                DemoTrack develops quality software and offers related services –
                software consulting, cloud migration, app integration, and more.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 my-3">
            <div
              className="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i className="text-4xl text-gray-400 fa-brands fa-dribbble group-hover:text-black "></i>
              <h3 className="py-2 text-lg font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>Website Development</h3>
              <p className="text-sm text-gray-500">
                DemoTrack's web developers help brands succeed in the ever-changing
                digital landscape by creating customer-focused, customer-centric website
                solutions.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 my-3">
            <div
              className="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i className="text-4xl text-gray-400 fa-brands fa-dribbble group-hover:text-black "></i>
              <h3 className="py-2 text-lg font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>Full Stack Development</h3>
              <p className="text-sm text-gray-500">
                Full-stack developers from DemoTrack are skilled in everything from the
                concept and idea to the finished product.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 my-3">
            <div
              className="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i className="text-4xl text-gray-400 fa-brands fa-dribbble group-hover:text-black "></i>
              <h3 className="py-2 text-lg font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>Website Design</h3>
              <p className="text-sm text-gray-500">
                You can rely on our team of designers and developers to produce the
                product you are looking for across a range of platforms and devices.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 my-3">
            <div
              className="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i className="text-4xl text-gray-400 fa-brands fa-dribbble group-hover:text-black "></i>
              <h3 className="py-2 text-lg font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>Website Design</h3>
              <p className="text-sm text-gray-500">
                You can rely on our team of designers and developers to produce the
                product you are looking for across a range of platforms and devices.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 my-3">
            <div
              className="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i className="text-4xl text-gray-400 fa-brands fa-dribbble group-hover:text-black "></i>
              <h3 className="py-2 text-lg font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>HR portals</h3>
              <p className="text-sm text-gray-500">
                We create secure, fast, and robust HR portals using the latest
                technologies. Our team always finds the best solution for you.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 my-3">
            <div
              className="group relative overflow-hidden flex flex-col gap-3 text-black text-base text-center p-8 h-full hover:shadow-[15px_15px_38px_0_rgba(0,0,0,.1)] hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:bg-gray-600 after:h-8 after:w-8 after:right-[-15px] after:top-[-15px] after:rotate-45"
              style={{transition: "all 0.3s linear"}}>
              <i className="text-4xl text-gray-400 fa-brands fa-dribbble group-hover:text-black "></i>
              <h3 className="py-2 text-lg font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>Full Satck Development</h3>
              <p className="text-sm text-gray-500">
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