import React from "react";
import aboutIcon from "../../assets/img/about.jpg"
import Header from "../Header";
import Heading from "../shared/Heading";
import { useNavigate } from "react-router-dom";

function Career() {
  const navigate =  useNavigate()
  return (
    <>
      <Header />
      <section id="career" className="bg-gray-200 py-14">
        <div className="px-3 mx-auto max-w-7xl">
          <Heading titleList = {["careerTitle","careerSubTitle"]}/>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
            <div className="h-full p-3 mb-5 text-base text-left text-gray-500 bg-white rounded shadow-lg group lg:p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg">
                    <img src={aboutIcon} className="w-full h-full rounded" />
                  </div>
                  <div className="block">
                    <h6 className="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i className="mr-1 fa-solid fa-location"></i> Indore</span>
                  </div>
                </div>
                <i className="cursor-pointer fa-solid fa-bolt"></i>
              </div>
              <div className="flex flex-col gap-2 item-baseline">
                <h3 className="text-xl font-bold text-gray-600 group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span><i className="mr-1 fa-solid fa-briefcase"></i> Full Time</span>
                  <span><i className="mr-1 fa-solid fa-clock"></i> Posted 1 year ago</span>
                </div>
                <p className="font-medium font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div className="flex items-center gap-2 py-2 text-sm font-medium">
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Adobe XD</span>
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Figma</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <button onClick={() => navigate("/career")}
                    className="px-3 py-2 text-base font-bold tracking-wide text-white uppercase bg-gray-600 rounded hover:bg-gray-800 ">Apply
                    Now</button>
                </div>
              </div>
            </div>
            <div className="h-full p-3 mb-5 text-base text-left text-gray-500 bg-white rounded shadow-lg group lg:p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg">
                    <img src={aboutIcon} className="w-full h-full rounded" />
                  </div>
                  <div className="block">
                    <h6 className="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i className="mr-1 fa-solid fa-location"></i> Indore</span>
                  </div>
                </div>
                <i className="cursor-pointer fa-solid fa-bolt"></i>
              </div>
              <div className="flex flex-col gap-2 item-baseline">
                <h3 className="text-xl font-bold text-gray-600 group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span><i className="mr-1 fa-solid fa-briefcase"></i> Full Time</span>
                  <span><i className="mr-1 fa-solid fa-clock"></i> Posted 1 year ago</span>
                </div>
                <p className="font-medium font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div className="flex items-center gap-2 py-2 text-sm font-medium">
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Adobe XD</span>
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Figma</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <button onClick={() => navigate("/career")}
                    className="px-3 py-2 text-base font-bold tracking-wide text-white uppercase bg-gray-600 rounded hover:bg-gray-800 ">Apply
                    Now</button>
                </div>
              </div>
            </div>
            <div className="h-full p-3 mb-5 text-base text-left text-gray-500 bg-white rounded shadow-lg group lg:p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg">
                    <img src={aboutIcon} className="w-full h-full rounded" />
                  </div>
                  <div className="block">
                    <h6 className="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i className="mr-1 fa-solid fa-location"></i> Indore</span>
                  </div>
                </div>
                <i className="cursor-pointer fa-solid fa-bolt"></i>
              </div>
              <div className="flex flex-col gap-2 item-baseline">
                <h3 className="text-xl font-bold text-gray-600 group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span><i className="mr-1 fa-solid fa-briefcase"></i> Full Time</span>
                  <span><i className="mr-1 fa-solid fa-clock"></i> Posted 1 year ago</span>
                </div>
                <p className="font-medium font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div className="flex items-center gap-2 py-2 text-sm font-medium">
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Adobe XD</span>
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Figma</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <button onClick={() => navigate("/career")}
                    className="px-3 py-2 text-base font-bold tracking-wide text-white uppercase bg-gray-600 rounded hover:bg-gray-800 ">Apply
                    Now</button>
                </div>
              </div>
            </div>
            <div className="h-full p-3 mb-5 text-base text-left text-gray-500 bg-white rounded shadow-lg group lg:p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg">
                    <img src={aboutIcon} className="w-full h-full rounded" />
                  </div>
                  <div className="block">
                    <h6 className="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i className="mr-1 fa-solid fa-location"></i> Indore</span>
                  </div>
                </div>
                <i className="cursor-pointer fa-solid fa-bolt"></i>
              </div>
              <div className="flex flex-col gap-2 item-baseline">
                <h3 className="text-xl font-bold text-gray-600 group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span><i className="mr-1 fa-solid fa-briefcase"></i> Full Time</span>
                  <span><i className="mr-1 fa-solid fa-clock"></i> Posted 1 year ago</span>
                </div>
                <p className="font-medium font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div className="flex items-center gap-2 py-2 text-sm font-medium">
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Adobe XD</span>
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Figma</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <button onClick={() => navigate("/career")}
                    className="px-3 py-2 text-base font-bold tracking-wide text-white uppercase bg-gray-600 rounded hover:bg-gray-800 ">Apply
                    Now</button>
                </div>
              </div>
            </div>
            <div className="h-full p-3 mb-5 text-base text-left text-gray-500 bg-white rounded shadow-lg group lg:p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg">
                    <img src={aboutIcon} className="w-full h-full rounded" />
                  </div>
                  <div className="block">
                    <h6 className="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i className="mr-1 fa-solid fa-location"></i> Indore</span>
                  </div>
                </div>
                <i className="cursor-pointer fa-solid fa-bolt"></i>
              </div>
              <div className="flex flex-col gap-2 item-baseline">
                <h3 className="text-xl font-bold text-gray-600 group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span><i className="mr-1 fa-solid fa-briefcase"></i> Full Time</span>
                  <span><i className="mr-1 fa-solid fa-clock"></i> Posted 1 year ago</span>
                </div>
                <p className="font-medium font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div className="flex items-center gap-2 py-2 text-sm font-medium">
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Adobe XD</span>
                  <span className="px-2 py-1 bg-gray-200 rounded hover:text-gray-600">Figma</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <button onClick={() => navigate("/career")}
                    className="px-3 py-2 text-base font-bold tracking-wide text-white uppercase bg-gray-600 rounded hover:bg-gray-800 ">Apply
                    Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Career;