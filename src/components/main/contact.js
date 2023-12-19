import React from "react";
import Header from "../header";

const Contact=(props)=> {
  const {titleContact} = props;
  return (
    <>
      <Header />
      <section id="contact" class="py-14 bg-gray-200">
        <div class="max-w-7xl mx-auto px-3">
          <div class="text-left pb-5">
            <h5
              class="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
              {titleContact.contactTitle}
            </h5>
            <h3 class="text-2xl md:text-3xl font-extrabold uppercase text-black"
              style={{ fontFamily: "'Raleway', sans-serif" }}>
                {titleContact.contactSubTitle}
            </h3>
          </div>
          <div class="sm:flex align-items-center gap-3 md:gap-5">
            <div class="w-full sm:w-1/3 mb-3">
              <div class="rounded-sm border bg-white text-black text-sm md:text-base text-left p-3 md:p-5 h-full">
                <div class="flex item-baseline gap-3 md:gap-5 mb-8">
                  <i
                    class="fa-solid fa-location-dot text-xl md:text-2xl rounded-sm bg-gray-200 hover:bg-gray-400 flex items-center justify-center w-8 md:w-11 h-8 md:h-11"></i>
                  <div class="text-black">
                    <h3 class="font-bold pb-1">Address</h3>
                    <p class="text-gray-500 group-hover:text-white text-sm">
                      XYZ, location, India 852001
                    </p>
                  </div>
                </div>
                <div class="flex item-baseline gap-3 md:gap-5 mb-8">
                  <i
                    class="fa-solid fa-envelope text-xl md:text-2xl rounded-sm bg-gray-200 hover:bg-gray-400 flex items-center justify-center w-8 md:w-11 h-8 md:h-11"></i>
                  <div class="text-black">
                    <h3 class="font-bold pb-1">Email</h3>
                    <p class="text-gray-500 group-hover:text-white text-sm">
                      <a href="mailto:xyz@example.com">xyzemail@example.com</a>
                    </p>
                  </div>
                </div>
                <div class="flex item-baseline gap-3 md:gap-5 mb-8">
                  <i
                    class="fa-solid fa-mobile-screen text-xl md:text-2xl rounded-sm bg-gray-200 hover:bg-gray-400 flex items-center justify-center w-8 md:w-11 h-8 md:h-11"></i>
                  <div class="text-black">
                    <h3 class="font-bold pb-1">Phone</h3>
                    <p class="text-gray-500 group-hover:text-white text-sm">
                      <a href="tel:+91-731-1212112">+91-731-1212112</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-2/3 mb-3">
              <div class="rounded-sm border bg-white text-black text-base text-left p-3 md:p-5 h-full">
                <form class="mx-auto">
                  <div class="flex item-center">
                    <div class="w-1/2 px-2 md:px-3 mb-5">
                      <label for="" class="text-sm md:text-base font-bold px-1">Your name</label>
                      <input type="text"
                        class="w-full px-3 py-2 text-sm rounded-sm border border-gray-200 outline-none focus:border-gray-400 text-gray-500 placeholder:text-gray-400"
                        placeholder="Enter name" />
                    </div>
                    <div class="w-1/2 px-2 md:px-3 mb-5">
                      <label for="" class="text-sm md:text-base font-bold px-1">Your mail</label>
                      <input type="email"
                        class="w-full px-3 py-2 text-sm rounded-sm border border-gray-200 outline-none focus:border-gray-400 text-gray-500 placeholder:text-gray-400"
                        placeholder="johnsmith@example.com" />
                    </div>
                  </div>
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-sm md:text-base font-bold px-1">Subject</label>
                    <input type="text"
                      class="w-full px-3 py-2 text-sm rounded-sm border border-gray-200 outline-none focus:border-gray-400 text-gray-500 placeholder:text-gray-400"
                      placeholder="Enter Subject" />
                  </div>
                  <div class="w-full px-3 mb-5">
                    <label for="description" class="text-sm md:text-base font-bold px-1">Message</label>
                    <textarea id="description" rows="4"
                      class="bg-white w-full px-3 py-2 text-sm rounded-sm border border-gray-200 outline-none focus:border-gray-400 text-gray-500 placeholder:text-gray-400"
                      placeholder="Enter your message"></textarea>
                  </div>
                  <div class="flex item-center">
                    <div class="w-full px-3 mb-5">
                      <button
                        class="block w-full max-w-xs mx-auto bg-gray-500 hover:bg-gray-700 focus:bg-gray-700 text-sm text-white rounded px-3 py-3 font-bold uppercase">Send
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