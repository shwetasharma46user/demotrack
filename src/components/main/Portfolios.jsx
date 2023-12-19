import React from "react";
import portfolio1 from "../../assets/img/img-1.webp";
import portfolio2 from "../../assets/img/img-2.webp";
import portfolio3 from "../../assets/img/img-3.webp";
import portfolio4 from "../../assets/img/img-4.webp";
import portfolio5 from "../../assets/img/img-5.webp";
import portfolio6 from "../../assets/img/img-6.webp";
import portfolio7 from "../../assets/img/img-7.webp";
import Header from "../Header";
import Heading from "../shared/Heading";

function Portfolio() {
  return (
    <>
      <Header />
      <section id="porfolio" className="py-14">
        <div className="px-3 mx-auto max-w-7xl">
          <Heading titleList={["portfolioTitle", "portfolioSubTitle"]} />
          <div className="">
            <ul className="flex flex-wrap text-base font-medium text-center text-gray-500 border-b border-gray-200">
              <li className="me-2">
                <a href="#" className="inline-block p-4 font-bold text-gray-800 bg-gray-200 rounded-t-lg active">All</a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200">Software
                  Development</a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200">Website
                  Development</a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200">Full
                  Stack Development</a>
              </li>
              <li>
                <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Website
                  Design</a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-5 px-2">
              <div className="w-1/3 grow shrink basis-1/4">
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio1} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio2} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio3} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 grow shrink basis-1/4">
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio7} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio1} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio4} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio6} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 grow shrink basis-1/4">
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio4} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio5} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio6} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
                  </div>
                </div>
                <div className="relative my-5 overflow-hidden shadow group">
                  <img src={portfolio2} alt="image" className="w-full relative top-0 group-hover:top-[-30px]"
                    style={{ transition: "all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)" }} />
                  <div
                    className="opacity-0 group-hover:opacity-100 absolute bottom-[-50px] group-hover:bottom-0 bg-gray-800 p-4 w-full text-white"
                    style={{ transition: "all ease-in-out 0.3s" }}>
                    <h5 className="pb-1 text-lg font-bold">PeersTrack</h5>
                    <p className="text-sm text-gray-500 group-hover:text-white">Full stack development</p>
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