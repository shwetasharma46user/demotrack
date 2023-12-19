import React from "react";
import Header from "../Header";
import Heading from "../shared/Heading";

function Contact() {
  return (
    <>
      <Header />
      <section id="contact" className="bg-gray-200 py-14">
        <div className="px-3 mx-auto max-w-7xl">
          <Heading titleList={["contactTitle", "contactSubTitle"]}/>
          <div className="gap-3 sm:flex align-items-center md:gap-5">
            <div className="w-full mb-3 sm:w-1/3">
              <div className="h-full p-3 text-sm text-left text-black bg-white border rounded-sm md:text-base md:p-5">
                <div className="flex gap-3 mb-8 item-baseline md:gap-5">
                  <i
                    className="flex items-center justify-center w-8 h-8 text-xl bg-gray-200 rounded-sm fa-solid fa-location-dot md:text-2xl hover:bg-gray-400 md:w-11 md:h-11"></i>
                  <div className="text-black">
                    <h3 className="pb-1 font-bold">Address</h3>
                    <p className="text-sm text-gray-500 group-hover:text-white">
                      XYZ, location, India 852001
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-8 item-baseline md:gap-5">
                  <i
                    className="flex items-center justify-center w-8 h-8 text-xl bg-gray-200 rounded-sm fa-solid fa-envelope md:text-2xl hover:bg-gray-400 md:w-11 md:h-11"></i>
                  <div className="text-black">
                    <h3 className="pb-1 font-bold">Email</h3>
                    <p className="text-sm text-gray-500 group-hover:text-white">
                      <a href="mailto:xyz@example.com">xyzemail@example.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-8 item-baseline md:gap-5">
                  <i
                    className="flex items-center justify-center w-8 h-8 text-xl bg-gray-200 rounded-sm fa-solid fa-mobile-screen md:text-2xl hover:bg-gray-400 md:w-11 md:h-11"></i>
                  <div className="text-black">
                    <h3 className="pb-1 font-bold">Phone</h3>
                    <p className="text-sm text-gray-500 group-hover:text-white">
                      <a href="tel:+91-731-1212112">+91-731-1212112</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-3 sm:w-2/3">
              <div className="h-full p-3 text-base text-left text-black bg-white border rounded-sm md:p-5">
                <form className="mx-auto">
                  <div className="flex item-center">
                    <div className="w-1/2 px-2 mb-5 md:px-3">
                      <label htmlFor="" className="px-1 text-sm font-bold md:text-base">Your name</label>
                      <input type="text"
                        className="w-full px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-sm outline-none focus:border-gray-400 placeholder:text-gray-400"
                        placeholder="Enter name" />
                    </div>
                    <div className="w-1/2 px-2 mb-5 md:px-3">
                      <label htmlFor="" className="px-1 text-sm font-bold md:text-base">Your mail</label>
                      <input type="email"
                        className="w-full px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-sm outline-none focus:border-gray-400 placeholder:text-gray-400"
                        placeholder="johnsmith@example.com" />
                    </div>
                  </div>
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="px-1 text-sm font-bold md:text-base">Subject</label>
                    <input type="text"
                      className="w-full px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-sm outline-none focus:border-gray-400 placeholder:text-gray-400"
                      placeholder="Enter Subject" />
                  </div>
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="description" className="px-1 text-sm font-bold md:text-base">Message</label>
                    <textarea id="description" rows="4"
                      className="w-full px-3 py-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-sm outline-none focus:border-gray-400 placeholder:text-gray-400"
                      placeholder="Enter your message"></textarea>
                  </div>
                  <div className="flex item-center">
                    <div className="w-full px-3 mb-5">
                      <button
                        className="block w-full max-w-xs px-3 py-3 mx-auto text-sm font-bold text-white uppercase bg-gray-500 rounded hover:bg-gray-700 focus:bg-gray-700">Send
                        message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;