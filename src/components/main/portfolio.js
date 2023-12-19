import React from "react";
import portfolio1 from "../../assets/img/img-1.webp";
import portfolio2 from "../../assets/img/img-2.webp";
import portfolio3 from "../../assets/img/img-3.webp";
import portfolio4 from "../../assets/img/img-4.webp";
import portfolio5 from "../../assets/img/img-5.webp";
import portfolio6 from "../../assets/img/img-6.webp";
import portfolio7 from "../../assets/img/img-7.webp";
import Header from "../header";

const Portfolio = (props) => {
  const {titlePortfolio} = props;
  return (
    <>
      <Header />
      <section id="porfolio" class="py-14">
        <div class="max-w-7xl mx-auto px-3">
          <div class="text-left pb-5">
            <h5
              class="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
              {titlePortfolio.portfolioTitle}
            </h5>
            <h3 class="text-2xl md:text-3xl font-extrabold uppercase text-black"
              style={{ fontFamily: "'Raleway', sans-serif" }}>
                {titlePortfolio.portfolioSubTitle}
            </h3>
          </div>
          <div class="">
            <ul class="flex flex-wrap text-base font-medium text-center text-gray-500 border-b border-gray-200">
              <li class="me-2">
                <a href="#" class="inline-block p-4 text-gray-800 font-bold bg-gray-200 rounded-t-lg active">All</a>
              </li>
              <li class="me-2">
                <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200">Software
                  Development</a>
              </li>
              <li class="me-2">
                <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200">Website
                  Development</a>
              </li>
              <li class="me-2">
                <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200">Full
                  Stack Development</a>
              </li>
              <li>
                <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Website
                  Design</a>
              </li>
            </ul>
            <div class="flex flex-wrap px-2 gap-5">
              <div class="w-1/3 grow shrink basis-1/4">
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio1} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio2} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio3} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
              </div>
              <div class="w-1/3 grow shrink basis-1/4">
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio7} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio1} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio4} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio6} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
              </div>
              <div class="w-1/3 grow shrink basis-1/4">
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio4} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio5} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio6} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
                <div class="group relative shadow overflow-hidden my-5">
                  <img src={portfolio2} alt="image" class="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    class="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 class="text-lg font-bold pb-1">PeersTrack</h5>
                    <p class="text-gray-500 group-hover:text-white text-sm">Full stack development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio;